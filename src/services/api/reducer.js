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
  const { type, payload } = action;

  const requestData = getRequestData(type);

  if (!requestData) {
    return state;
  }

  const [requestName, requestState] = requestData;

  const newState = {
    ...state,
    [requestName]: getStatusByRequestState(requestState)
  };

  if (payload && payload.reset) {
    return {
      ...newState,
      ...payload.reset
        .map(resetType => getRequestData(resetType))
        .filter(requestData => !!requestData)
        .reduce((prev, [requestName]) => ({
          ...prev,
          [requestName]: IDLE
        }))
    };
  }

  return newState;
}

function isStatus(store, status, actionType) {
  const [requestName] = getRequestData(actionType);
  const typeNotStarted = !store.status || !store.status[requestName];

  if (typeNotStarted) {
    return status === IDLE;
  }

  return store.status[requestName] === status;
}

export function isActionLoading(store, ...actionTypes) {
  return actionTypes.some(type => isStatus(store, PENDING, type));
}

export function isActionSuccess(store, ...actionTypes) {
  return actionTypes.every(type => isStatus(store, RESOLVED, type));
}

export function isActionFailure(store, ...actionTypes) {
  return actionTypes.some(type => isStatus(store, REJECTED, type));
}
