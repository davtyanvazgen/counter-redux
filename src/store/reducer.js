import * as atcionTypes from "./actions";

const initialState = {
  counter: 0,
  results: []
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
    case atcionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case atcionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }

  return state;
};

export default reducer;
