import { createStore, applyMiddleware, combineReducers } from "redux";
import { createMiddleware } from "redux-api-middleware";
import api from "api";
import characterReducer from "components/CharacterList/reducer";
import statusReducer from "api/statusReducer";

const apiMiddleware = createMiddleware({
  fetch: api,
  ok: res => res
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const reducer = combineReducers({
  character: characterReducer,
  status: statusReducer
});

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
