import { CHARACTER_GET_SUCCESS } from "./actions";
import {
  CHARACTER_SEARCH_SUCCESS,
  CHARACTER_SEARCH_REQUEST,
  CHARACTER_SEARCH_RESET
} from "components/Search/actions";
import { CHARACTER_GET_INFO_REQUEST } from "components/CharacterInfo/actions";
import { CHARACTER_GET_SERIES_REQUEST } from "components/CharacterSeries/actions";
import { searchCharacters } from "services/storage";
import { API_ORDER } from "constants/parameters";

const INITIAL_STATE = {
  characters: [],
  characterSearch: [],
  isSearchMode: false
};

function mergeSearchResultsAndStorage(searchResults, searchText) {
  const storageSearchResults = searchCharacters(searchText);

  const { GET_CHARACTERS: ORDER_DATA } = API_ORDER;
  const sortByData = (a, b) => {
    const aData = a[ORDER_DATA];
    const bData = b[ORDER_DATA];

    if (aData > bData) {
      return 1;
    }

    if (aData < bData) {
      return -1;
    }

    return 0;
  };

  return searchResults
    .filter(character =>
      storageSearchResults.every(result => result.id !== character.id)
    )
    .concat(storageSearchResults)
    .sort(sortByData);
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SUCCESS:
      return {
        ...state,
        characters: action.payload.response.data.results,
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
        characterSearch: mergeSearchResultsAndStorage(
          action.payload.data.results,
          action.meta.searchText
        )
      };

    case CHARACTER_GET_INFO_REQUEST:
    case CHARACTER_GET_SERIES_REQUEST:
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
