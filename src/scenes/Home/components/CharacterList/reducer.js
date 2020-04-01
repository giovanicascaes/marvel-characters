import getReducer from "./components/Get/reducer";
import searchReducer from "./components/Search/reducer";
import {
  CHARACTER_SEARCH_REQUEST,
  CHARACTER_SEARCH_RESET
} from "./components/Search/actions";

const INITIAL_STATE = {
  isSearchMode: false
};

export default function(state = INITIAL_STATE, action) {
  let nextState;

  switch (action.type) {
    case CHARACTER_SEARCH_REQUEST:
      nextState = {
        ...state,
        isSearchMode: true
      };
      break;

    case CHARACTER_SEARCH_RESET:
      nextState = {
        ...state,
        isSearchMode: false
      };
      break;

    default:
      nextState = state;
      break;
  }

  return {
    ...nextState,
    get: getReducer(state.get, action),
    search: searchReducer(state.search, action)
  };
}
