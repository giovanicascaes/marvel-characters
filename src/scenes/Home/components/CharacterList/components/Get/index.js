import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./actions";
import List from "../List";
import Message from "components/Message";
import {
  isActionLoading,
  isActionSuccess,
  isActionFailure
} from "services/api/reducer";
import { CHARACTER_GET_REQUEST } from "./actions";
import useMemoryState from "utils/hooks/useMemoryState";
import { getCharactersLoadingList } from "../../helpers";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export default function Get() {
  const [hasRequested, setHasRequested] = useMemoryState(false);
  const {
    characters,
    isLoading,
    isSuccess,
    isError,
    hasMoreToLoad,
    countInNextPage
  } = useSelector(store => {
    const { characters, total, offset, count } = store.characters.get;
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
      isLoading: isActionLoading(store, CHARACTER_GET_REQUEST),
      isSuccess: isActionSuccess(store, CHARACTER_GET_REQUEST),
      isError: isActionFailure(store, CHARACTER_GET_REQUEST),
      hasMoreToLoad,
      countInNextPage
    };
  });
  const [charactersToList, setCharactersToList] = useState([]);
  const dispatch = useDispatch();

  const requestCharacters = useCallback(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (!hasRequested) {
      setHasRequested(true);
      requestCharacters();
    }
  }, [hasRequested, requestCharacters, setHasRequested]);

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
    }
  }, [characters, isSuccess]);

  if (isError) {
    return (
      <Message
        title="Ocorreu um erro ao buscar os personagens"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  return (
    <List
      characters={charactersToList}
      isLoading={isLoading}
      hasMoreToLoad={hasMoreToLoad}
      onLoadMore={requestCharacters}
    />
  );
}
