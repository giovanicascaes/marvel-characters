import { saveCharacter } from "services/storage";

export const CHARACTER_SEARCH_RESET = "character/SEARCH_RESET";
export const CHARACTER_UPDATE = "character/UPDATE";

export const updateCharacter = payload => {
  saveCharacter(payload);

  return {
    type: CHARACTER_UPDATE,
    payload
  };
};
