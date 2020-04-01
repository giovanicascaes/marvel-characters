import { CHARACTER_GET_SUCCESS } from "./actions";
import { CHARACTER_UPDATE } from "../../actions";
import {
  putUpdateCharacterInStorage,
  mergeResultsAndStorage
} from "services/storage";

const INITIAL_STATE = {
  characters: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHARACTER_GET_SUCCESS: {
      const {
        results: characters,
        ...otherData
      } = action.payload.response.data;
      return {
        ...state,
        ...otherData,
        characters: [...state.characters, ...mergeResultsAndStorage(characters)]
      };
    }

    case CHARACTER_UPDATE: {
      const { payload: characterToUpdate } = action;

      return {
        ...state,
        characters: putUpdateCharacterInStorage(
          state.characters,
          characterToUpdate
        )
      };
    }

    default:
      return state;
  }
}
