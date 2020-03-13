import { createAction } from "services/api";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export const CHARACTER_GET_SERIES_REQUEST = "character/GET_SERIES_REQUEST";
export const CHARACTER_GET_SERIES_SUCCESS = "character/GET_SERIES_SUCCESS";
export const CHARACTER_GET_SERIES_FAILURE = "character/GET_SERIES_FAILURE";

export const getCharacterSeries = (
  characterId,
  perPage = API_ITEMS_PER_PAGE.GET_SERIES
) =>
  createAction({
    endpoint: `/characters/${characterId}/series?limit=${perPage}`,
    method: "GET",
    types: [
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_SERIES_SUCCESS,
      CHARACTER_GET_SERIES_FAILURE
    ]
  });
