const SearchReducer = (currentState, action) => {
  switch (action.type) {
    case "GET_PROFILES":
      return { ...currentState, profiles: action.payload, loading: false };
    case "SET_LOADING":
      return { ...currentState, loading: true };
    case "CLEAR_PROFILES":
      return { ...currentState, profiles: [] };
    default:
      return currentState;
  }
};

export default SearchReducer;
