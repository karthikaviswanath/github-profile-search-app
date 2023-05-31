import { createContext, useReducer } from "react";
import SearchReducer from "./SearchReducer";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //Initial State
  const initialState = {
    profiles: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Search Profiles

  const searchProfiles = async (text) => {
    dispatch({ type: "SET_LOADING" });
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_BASE_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const { items } = await response.json();
    dispatch({ type: "GET_PROFILES", payload: items });
  };

  //Clear Profiles

  const clearProfiles = () => {
    dispatch({ type: "CLEAR_PROFILES" });
  };

  return (
    <SearchContext.Provider
      value={{
        profiles: state.profiles,
        loading: state.loading,
        searchProfiles,
        clearProfiles,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
