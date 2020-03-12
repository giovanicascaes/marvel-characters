import { createAction } from "services/api";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export const CHARACTER_GET_REQUEST = "character/GET_REQUEST";
export const CHARACTER_GET_SUCCESS = "character/GET_SUCCESS";
export const CHARACTER_GET_FAILURE = "character/GET_FAILURE";

export const getCharacters = (perPage = API_ITEMS_PER_PAGE.GET_CHARACTERS) =>
  createAction({
    endpoint: `/characters?limit=${perPage}`,
    method: "GET",
    types: [CHARACTER_GET_REQUEST, CHARACTER_GET_SUCCESS, CHARACTER_GET_FAILURE]
  });
