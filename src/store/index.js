import { createStore, applyMiddleware, combineReducers } from "redux";
import { createMiddleware } from "redux-api-middleware";
import api from "services/api";
import characterReducer from "scenes/Home/components/CharacterList/reducer";
import characterInfoReducer from "scenes/CharacterDetails/components/CharacterInfo/reducer";
import characterSeriesReducer from "scenes/CharacterDetails/components/CharacterSeries/reducer";
import statusReducer from "services/api/reducer";

const apiMiddleware = createMiddleware({
  fetch: api,
  ok: res => res
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const reducer = combineReducers({
  characters: characterReducer,
  character: combineReducers({
    info: characterInfoReducer,
    series: characterSeriesReducer
  }),
  status: statusReducer
});

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
