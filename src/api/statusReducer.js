import {
  IDLE,
  PENDING,
  REJECTED,
  RESOLVED
} from "constants/apiRequestStatuses";
import { CHARACTER_GET_REQUEST } from "../components/CharacterList/actions";

function getStatusByRequestState(requestState) {
  switch (requestState) {
    case "REQUEST":
      return PENDING;

    case "SUCCESS":
      return RESOLVED;

    case "FAILURE":
      return REJECTED;

    default:
      return IDLE;
  }
}

function getRequestData(actionType) {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

  if (!matches) return false;

  const [, requestName, requestState] = matches;

  return [requestName, requestState];
}

export default function(state = {}, action) {
  const { type } = action;

  const requestData = getRequestData(type);

  if (!requestData) {
    return state;
  }

  const [requestName, requestState] = requestData;

  return {
    ...state,
    [requestName]: getStatusByRequestState(requestState)
  };
}

function isStatus(store, requestName, status) {
  if (!store.status || !store.status[requestName]) {
    return status === IDLE;
  }

  return store.status[requestName] === status;
}

function isStatusCharacter(store, status) {
  const [requestName] = getRequestData(CHARACTER_GET_REQUEST);
  return isStatus(store, requestName, status);
}

export function isLoadingCharacters(store) {
  return isStatusCharacter(store, PENDING);
}

export function hasGottenCharacters(store) {
  return isStatusCharacter(store, RESOLVED);
}

export function hasFailedGettingCharacters(store) {
  return isStatusCharacter(store, REJECTED);
}
