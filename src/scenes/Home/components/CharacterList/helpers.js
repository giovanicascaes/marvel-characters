import { API_ITEMS_PER_PAGE } from "constants/parameters";

export function getCharactersLoadingList(countInNextPage) {
  return [
    ...new Array(countInNextPage || API_ITEMS_PER_PAGE.GET_CHARACTERS)
  ].map(() => ({
    name: "",
    thumbnail: null
  }));
}
