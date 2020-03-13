import { CHARACTER_GET_SERIES_SUCCESS } from "./actions";
import { CHARACTER_GET_SUCCESS } from "components/CharacterList/actions";

const INITIAL_STATE = [];

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SERIES_SUCCESS:
      return action.payload.data.results;

    case CHARACTER_GET_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
}
