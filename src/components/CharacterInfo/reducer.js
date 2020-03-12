import { CHARACTER_GET_INFO_SUCCESS } from "./actions";

const INITIAL_STATE = {};

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_INFO_SUCCESS:
      return {
        ...action.payload.data.results[0]
      };

    default:
      return state;
  }
}
