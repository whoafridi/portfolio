import { MULTIPLY, ADD } from "./actionTypes";

const initialState = {
  value: 20,
};

const multiplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MULTIPLY:
      return {
        ...state,
        value: state.value * action.payload,
      };
    case ADD:
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

export default multiplyReducer;
