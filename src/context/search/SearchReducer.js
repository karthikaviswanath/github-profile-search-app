const SearchReducer = (currentState, action) => {
  switch (action.type) {
    case "GET_PROFILES":
      return { ...currentState, profiles: action.payload, loading: false };
    case "SET_LOADING":
      return { ...currentState, loading: true };
    case "CLEAR_PROFILES":
      return { ...currentState, profiles: [] };
    case "GET_PROFILE":
      return { ...currentState, profile: action.payload, loading: false };
    case "GET_REPOS":
      return { ...currentState, repos: action.payload, loading: false };
    default:
      return currentState;
  }
};

export default SearchReducer;
