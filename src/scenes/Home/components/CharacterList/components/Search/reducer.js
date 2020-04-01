import { CHARACTER_SEARCH_SUCCESS, CHARACTER_SEARCH_REQUEST } from "./actions";
import { CHARACTER_SEARCH_RESET, CHARACTER_UPDATE } from "../../actions";
import {
  mergeResultsAndStorage,
  putUpdateCharacterInStorage
} from "services/storage";

const INITIAL_STATE = {
  characters: [],
  searchText: ""
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_SEARCH_REQUEST:
      return {
        ...state,
        searchText: action.meta.searchText,
        characters: []
      };

    case CHARACTER_SEARCH_SUCCESS: {
      const { results: characters, ...otherData } = action.payload.data;
      return {
        ...state,
        ...otherData,
        characters: [
          ...state.characters,
          ...mergeResultsAndStorage(characters, action.meta.searchText)
        ]
      };
    }

    case CHARACTER_SEARCH_RESET:
      return INITIAL_STATE;

    case CHARACTER_UPDATE: {
      const { payload: characterToUpdate } = action;

      return {
        ...state,
        characters: putUpdateCharacterInStorage(
          state.characters,
          characterToUpdate
        )
      };
    }

    default:
      return state;
  }
}
