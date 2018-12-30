const INITIAL_STATE = { backgroundColor: "#c5c5c5", color: true };

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ALTER_THEME":
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor,
        color: state.color ? false : true
      };
    default:
      return state;
  }
}
