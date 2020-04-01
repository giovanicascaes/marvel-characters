import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "../List";
import Message from "components/Message";
import {
  isActionLoading,
  isActionSuccess,
  isActionFailure
} from "services/api/reducer";
import { CHARACTER_SEARCH_REQUEST, searchCharacters } from "./actions";
import Loading from "components/Loading";
import { getCharactersLoadingList } from "../../helpers";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export default function CharacterList() {
  const {
    characters,
    isLoading,
    isSuccess,
    isError,
    hasMoreToLoad,
    countInNextPage
  } = useSelector(store => {
    const { characters, total, offset, count } = store.characters.search;
    const hasMoreToLoad = offset + count < total;
    let countInNextPage = null;

    if (hasMoreToLoad) {
      const remainingCharacters = total - offset + count;

      if (remainingCharacters > API_ITEMS_PER_PAGE.GET_CHARACTERS) {
        countInNextPage = API_ITEMS_PER_PAGE.GET_CHARACTERS;
      } else {
        countInNextPage = remainingCharacters;
      }
    }

    return {
      characters,
      isLoading: isActionLoading(store, CHARACTER_SEARCH_REQUEST),
      isSuccess: isActionSuccess(store, CHARACTER_SEARCH_REQUEST),
      isError: isActionFailure(store, CHARACTER_SEARCH_REQUEST),
      hasMoreToLoad,
      countInNextPage
    };
  });
  const [charactersToList, setCharactersToList] = useState([]);
  const [isDoneSearchingCharacters, setIsDoneSearchingCharacters] = useState(
    false
  );

  useEffect(() => {
    if (isLoading) {
      setCharactersToList(current => [
        ...current,
        ...getCharactersLoadingList(countInNextPage)
      ]);
    }
  }, [isLoading, countInNextPage]);

  useEffect(() => {
    if (isSuccess) {
      setCharactersToList(characters);
      setIsDoneSearchingCharacters(true);
    }
  }, [characters, isSuccess]);

  useEffect(() => {
    if (isLoading) {
      setIsDoneSearchingCharacters(false);
    }
  }, [isLoading]);

  if (isError) {
    return (
      <Message
        title="Ocorreu um erro ao buscar os personagens"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  if (!isDoneSearchingCharacters) {
    return <Loading />;
  }

  return (
    <List
      characters={charactersToList}
      isLoading={isLoading}
      hasMoreToLoad={hasMoreToLoad}
      onLoadMore={searchCharacters}
    />
  );
}
