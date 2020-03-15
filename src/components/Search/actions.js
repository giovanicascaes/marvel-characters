import { createAction } from "services/api";
import { RSAA } from "redux-api-middleware";
import { API_ITEMS_PER_PAGE, API_ORDER } from "constants/parameters";

export const CHARACTER_SEARCH_REQUEST = "character/SEARCH_REQUEST";
export const CHARACTER_SEARCH_SUCCESS = "character/SEARCH_SUCCESS";
export const CHARACTER_SEARCH_FAILURE = "character/SEARCH_FAILURE";

export const CHARACTER_SEARCH_RESET = "character/SEARCH_RESET";

const REQUEST_TYPE_INDEX = 0;

export const searchCharacters = (
  searchText,
  perPage = API_ITEMS_PER_PAGE.GET_CHARACTERS,
  orderBy = API_ORDER.GET_CHARACTERS
) =>
  createAction({
    endpoint: `/characters?limit=${perPage}&orderBy=${orderBy}&nameStartsWith=${searchText}`,
    method: "GET",
    types: [
      {
        type: CHARACTER_SEARCH_REQUEST,
        meta: {
          searchText
        }
      },
      {
        type: CHARACTER_SEARCH_SUCCESS,
        meta: action => ({
          searchText: action[RSAA].types[REQUEST_TYPE_INDEX].meta.searchText
        })
      },
      CHARACTER_SEARCH_FAILURE
    ]
  });

export const clearSearch = () => ({ type: CHARACTER_SEARCH_RESET });
