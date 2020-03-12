import { createAction } from "services/api";

export const CHARACTER_GET_SERIES_REQUEST = "character/GET_SERIES_REQUEST";
export const CHARACTER_GET_SERIES_SUCCESS = "character/GET_SERIES_SUCCESS";
export const CHARACTER_GET_SERIES_FAILURE = "character/GET_SERIES_FAILURE";

export const getCharacterSeries = characterId =>
  createAction({
    endpoint: `/characters/${characterId}/series`,
    method: "GET",
    types: [
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_SERIES_SUCCESS,
      CHARACTER_GET_SERIES_FAILURE
    ]
  });
