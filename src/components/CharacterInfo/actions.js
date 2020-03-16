import { createAction } from "services/api";

export const CHARACTER_GET_INFO_REQUEST = "character/GET_INFO_REQUEST";
export const CHARACTER_GET_INFO_SUCCESS = "character/GET_INFO_SUCCESS";
export const CHARACTER_GET_INFO_FAILURE = "character/GET_INFO_FAILURE";

export const CHARACTER_TOGGLE_EDIT = "character/CHARACTER_TOGGLE_EDIT";
export const CHARACTER_UPDATE_INFO = "character/CHARACTER_UPDATE_INFO";

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

export const toggleEditCharacter = () => ({
  type: CHARACTER_TOGGLE_EDIT
});

export const updateCharacterInfo = characterInfo => ({
  type: CHARACTER_UPDATE_INFO,
  payload: characterInfo
});
