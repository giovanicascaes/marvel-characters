import {
  CHARACTER_GET_SUCCESS,
  CHARACTER_SEARCH_SUCCESS,
  CHARACTER_SEARCH_RESET,
  CHARACTER_SEARCH_REQUEST
} from "./actions";

const INITIAL_STATE = {
  characters: [],
  characterSearch: [],
  isSearchMode: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SUCCESS:
      return {
        ...state,
        characters: action.payload.data.results,
        characterSearch: []
      };

    case CHARACTER_SEARCH_REQUEST:
      return {
        ...state,
        isSearchMode: true
      };

    case CHARACTER_SEARCH_SUCCESS:
      return {
        ...state,
        characterSearch: action.payload.data.results
      };

    case CHARACTER_SEARCH_RESET:
      return {
        ...state,
        characterSearch: [],
        isSearchMode: false
      };

    default:
      return state;
  }
}
