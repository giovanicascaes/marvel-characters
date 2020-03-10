import { CHARACTER_GET_SUCCESS, CHARACTER_SEARCH_SUCCESS } from "./actions";

const INITIAL_STATE = {
  characters: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SUCCESS:
      return {
        ...state,
        characters: action.payload.data.results
      };

    case CHARACTER_SEARCH_SUCCESS:
      return {
        ...state,
        characters: action.payload.data.results
      };

    default:
      return state;
  }
}
