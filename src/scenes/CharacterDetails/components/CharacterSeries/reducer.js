import {
  CHARACTER_GET_SERIES_SUCCESS,
  CHARACTER_CLEAR_SERIES
} from "./actions";

const INITIAL_STATE = {
  series: []
};

export default function charcterInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SERIES_SUCCESS: {
      const { results: series, ...otherData } = action.payload.data;
      return {
        ...state,
        ...otherData,
        series: [...state.series, ...series]
      };
    }

    case CHARACTER_CLEAR_SERIES:
      return INITIAL_STATE;

    default:
      return state;
  }
}
