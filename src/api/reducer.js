import {
  IDLE,
  PENDING,
  REJECTED,
  RESOLVED
} from "constants/apiRequestStatuses";

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
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE|RESET)/.exec(actionType);

  if (!matches) return false;

  const [, requestName, requestState] = matches;

  return [requestName, requestState];
}

export default function statuReducer(state = {}, action) {
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

function isStatus(store, actionType, status) {
  const [requestName] = getRequestData(actionType);

  if (!store.status || !store.status[requestName]) {
    return status === IDLE;
  }

  return store.status[requestName] === status;
}

export function isActionLoading(store, actionType) {
  return isStatus(store, actionType, PENDING);
}

export function isActionSuccess(store, actionType) {
  return isStatus(store, actionType, RESOLVED);
}

export function isActionFailure(store, actionType) {
  return isStatus(store, actionType, REJECTED);
}
