import { createAction } from "services/api";
import { API_ITEMS_PER_PAGE } from "constants/parameters";
import { CHARACTER_GET_INFO_REQUEST } from "components/CharacterInfo/actions";
import { CHARACTER_GET_SERIES_REQUEST } from "components/CharacterSeries/actions";

export const CHARACTER_GET_REQUEST = "character/GET_REQUEST";
export const CHARACTER_GET_SUCCESS = "character/GET_SUCCESS";
export const CHARACTER_GET_FAILURE = "character/GET_FAILURE";

export const getCharacters = (perPage = API_ITEMS_PER_PAGE.GET_CHARACTERS) =>
  createAction({
    endpoint: `/characters?limit=${perPage}`,
    method: "GET",
    types: [
      CHARACTER_GET_REQUEST,
      {
        type: CHARACTER_GET_SUCCESS,
        payload: (_action, _state, res) => ({
          response: res.data,
          reset: [CHARACTER_GET_INFO_REQUEST, CHARACTER_GET_SERIES_REQUEST]
        })
      },
      CHARACTER_GET_FAILURE
    ]
  });
