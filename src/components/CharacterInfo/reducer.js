import {
  CHARACTER_GET_INFO_SUCCESS,
  CHARACTER_TOGGLE_EDIT,
  CHARACTER_UPDATE_INFO
} from "./actions";
import { CHARACTER_GET_SUCCESS } from "components/CharacterList/actions";
import { getCharacter } from "services/storage";

const INITIAL_STATE = {
  isEditing: false,
  data: {}
};

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_INFO_SUCCESS: {
      const characterData = action.payload.data.results[0];
      const storedCharacter = getCharacter(characterData.id) || {};

      return {
        ...state,
        data: {
          ...characterData,
          ...storedCharacter
        }
      };
    }

    case CHARACTER_GET_SUCCESS:
      return INITIAL_STATE;

    case CHARACTER_TOGGLE_EDIT:
      return {
        ...state,
        isEditing: !state.isEditing
      };

    case CHARACTER_UPDATE_INFO:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        },
        isEditing: false
      };

    default:
      return state;
  }
}
