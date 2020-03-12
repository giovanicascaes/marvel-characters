import { CHARACTER_GET_SERIES_SUCCESS } from "./actions";

const INITIAL_STATE = [];

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SERIES_SUCCESS:
      return action.payload.data.results;

    default:
      return state;
  }
}
