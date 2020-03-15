import { CHARACTER_GET_INFO_SUCCESS, CHARACTER_TOGGLE_EDIT } from "./actions";
import { CHARACTER_GET_SUCCESS } from "components/CharacterList/actions";

const INITIAL_STATE = {
  isEditing: false,
  data: {}
};

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload.data.results[0]
      };

    case CHARACTER_GET_SUCCESS:
      return INITIAL_STATE;

    case CHARACTER_TOGGLE_EDIT:
      return {
        ...state,
        isEditing: !state.isEditing
      };

    default:
      return state;
  }
}
