import { createAction } from "services/api";

export const CHARACTER_GET_INFO_REQUEST = "character/GET_INFO_REQUEST";
export const CHARACTER_GET_INFO_SUCCESS = "character/GET_INFO_SUCCESS";
export const CHARACTER_GET_INFO_FAILURE = "character/GET_INFO_FAILURE";
export const CHARACTER_GET_INFO_RESET = "character/GET_INFO_RESET";

export const getCharacterInfo = characterId =>
  createAction({
    endpoint: `/characters/${characterId}`,
    method: "GET",
    types: [
      CHARACTER_GET_INFO_REQUEST,
      CHARACTER_GET_INFO_SUCCESS,
      CHARACTER_GET_INFO_FAILURE
    ]
  });

export const clearCharacterInfo = () => ({
  type: CHARACTER_GET_INFO_RESET
});
