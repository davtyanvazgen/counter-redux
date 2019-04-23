import * as atcionTypes from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case atcionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case atcionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case atcionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case atcionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
  }

  return state;
};

export default reducer;
