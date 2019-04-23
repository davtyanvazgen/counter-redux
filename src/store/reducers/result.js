import * as atcionTypes from "../actions";
import v1 from "uuid/v1";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case atcionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: v1(), value: action.result })
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
