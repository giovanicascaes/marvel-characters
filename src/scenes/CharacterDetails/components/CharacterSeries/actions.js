import { createAction } from "services/api";
import { API_ITEMS_PER_PAGE, API_ORDER } from "constants/parameters";

export const CHARACTER_GET_SERIES_REQUEST = "character/GET_SERIES_REQUEST";
export const CHARACTER_GET_SERIES_SUCCESS = "character/GET_SERIES_SUCCESS";
export const CHARACTER_GET_SERIES_FAILURE = "character/GET_SERIES_FAILURE";

export const CHARACTER_CLEAR_SERIES = "character/CHARACTER_CLEAR_SERIES";

export const getCharacterSeries = (
  characterId,
  perPage = API_ITEMS_PER_PAGE.GET_SERIES,
  orderBy = API_ORDER.GET_SERIES
) =>
  createAction({
    endpoint: ({ character }) => {
      const { total, offset, limit, count } = character.series;
      return `/characters/${characterId}/series?limit=${perPage}&orderBy=${orderBy}${
        offset + count < total ? `&offset=${offset + limit}` : ""
      }`;
    },
    method: "GET",
    types: [
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_SERIES_SUCCESS,
      CHARACTER_GET_SERIES_FAILURE
    ]
  });

export const clearSeries = () => ({
  type: CHARACTER_CLEAR_SERIES
});
