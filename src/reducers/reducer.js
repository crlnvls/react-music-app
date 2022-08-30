const initState = {
  showData: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_SHOWS":
      return {
        ...state,

        showData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
