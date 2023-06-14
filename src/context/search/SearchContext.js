import { createContext, useReducer } from "react";
import SearchReducer from "./SearchReducer";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //Initial State
  const initialState = {
    profiles: [],
    loading: false,
    profile:{},
    repos:[]
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Search Profiles

  const searchProfiles = async (text) => {
    dispatch({ type: "SET_LOADING" });
    const params = new URLSearchParams({
      q: text,
    });

    console.log(text);
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_BASE_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const { items } = await response.json();
    console.log(items);
    dispatch({ type: "GET_PROFILES", payload: items });
  };

  //Clear Profiles

  const clearProfiles = () => {
    dispatch({ type: "CLEAR_PROFILES" });
  };

  //Get individual profile details
  const getProfile = async (login) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PROFILE", payload: data });
  };

  //Get Repo details
  const getRepos = async (login) => {
    dispatch({ type: "SET_LOADING" });
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    dispatch({ type: "GET_REPOS", payload: data });
  };

  return (
    <SearchContext.Provider
      value={{
        profiles: state.profiles,
        loading: state.loading,
        profile:state.profile,
        repos:state.repos,
        searchProfiles,
        clearProfiles,
        getProfile,
        getRepos,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
