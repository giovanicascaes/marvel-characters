import { createAction } from "api";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export const CHARACTER_GET_REQUEST = "character/GET_REQUEST";
export const CHARACTER_GET_SUCCESS = "character/GET_SUCCESS";
export const CHARACTER_GET_FAILURE = "character/GET_FAILURE";

export const CHARACTER_SEARCH_REQUEST = "character/SEARCH_REQUEST";
export const CHARACTER_SEARCH_SUCCESS = "character/SEARCH_SUCCESS";
export const CHARACTER_SEARCH_FAILURE = "character/SEARCH_FAILURE";

export const CHARACTER_SEARCH_RESET = "character/SEARCH_RESET";

export const getCharacters = (perPage = API_ITEMS_PER_PAGE.GET_CHARACTERS) =>
  createAction({
    endpoint: `/characters?limit=${perPage}`,
    method: "GET",
    types: [CHARACTER_GET_REQUEST, CHARACTER_GET_SUCCESS, CHARACTER_GET_FAILURE]
  });

export const searchCharacters = (
  searchText,
  perPage = API_ITEMS_PER_PAGE.GET_CHARACTERS
) =>
  createAction({
    endpoint: `/characters?limit=${perPage}&name=${searchText}`,
    method: "GET",
    types: [
      CHARACTER_SEARCH_REQUEST,
      CHARACTER_SEARCH_SUCCESS,
      CHARACTER_SEARCH_FAILURE
    ]
  });

export const clearSearch = () => ({ type: CHARACTER_SEARCH_RESET });
