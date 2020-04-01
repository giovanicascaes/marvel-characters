import axios from "axios";
import { createAction as doCreateAction } from "redux-api-middleware";
import { setupCache } from "axios-cache-adapter";
import md5 from "blueimp-md5";

export const REQUEST_TYPE_INDEX = 0;

const ONE_DAY = 1000 * 60 * 60 * 24;

export const createAction = rsaa => {
  let [RESQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE] = rsaa.types;

  if (typeof SUCCESS_TYPE === "string") {
    SUCCESS_TYPE = {
      type: SUCCESS_TYPE,
      payload: (_action, _state, res) => res.data
    };
  } else if (!SUCCESS_TYPE.payload) {
    SUCCESS_TYPE.payload = (_action, _state, res) => res.data;
  }

  return doCreateAction({
    ...rsaa,
    types: [RESQUEST_TYPE, SUCCESS_TYPE, FAILURE_TYPE]
  });
};

const cache = setupCache({
  maxAge: ONE_DAY
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json"
  },
  adapter: cache.adapter
});
instance.interceptors.request.use(config => {
  const ts = new Date().getTime();
  config.params = {
    apikey: process.env.REACT_APP_PUBLIC_API_KEY,
    ts,
    hash: md5(
      ts +
        process.env.REACT_APP_PRIVATE_API_KEY +
        process.env.REACT_APP_PUBLIC_API_KEY
    )
  };
  return config;
});

export default instance;
