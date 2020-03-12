import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./actions";
import List from "./components/List";
import Empty from "../Empty";
import { API_ITEMS_PER_PAGE } from "constants/parameters";
import {
  isActionLoading,
  isActionSuccess,
  isActionFailure
} from "services/api/reducer";
import { CHARACTER_GET_REQUEST } from "./actions";
import { CHARACTER_SEARCH_REQUEST } from "components/Search/actions";
import Loading from "components/Loading";

export default function CharacterList() {
  const [charactersToList, setCharactersToList] = useState(
    [...new Array(API_ITEMS_PER_PAGE.GET_CHARACTERS)].map(() => ({
      name: "",
      thumbnail: {}
    }))
  );
  const [isDoneSearchingCharacters, setIsDoneSearchingCharacters] = useState(
    false
  );

  const finishSearchingCharacters = charactersToSet => {
    setCharactersToList(charactersToSet);
    setIsDoneSearchingCharacters(true);
  };

  const dispatch = useDispatch();
  const {
    isSearchMode,
    characters,
    isLoadingGetCharacters,
    isSuccessGetCharacters,
    isErrorGetCharacters,
    characterSearch,
    isLoadingSearchCharacters,
    isSuccessSearchCharacters,
    isErrorSearchCharacters
  } = useSelector(store => {
    const { characters, characterSearch, isSearchMode } = store.characters;
    return {
      characters,
      characterSearch,
      isSearchMode,
      isLoadingGetCharacters: isActionLoading(store, CHARACTER_GET_REQUEST),
      isSuccessGetCharacters: isActionSuccess(store, CHARACTER_GET_REQUEST),
      isErrorGetCharacters: isActionFailure(store, CHARACTER_GET_REQUEST),
      isLoadingSearchCharacters: isActionLoading(
        store,
        CHARACTER_SEARCH_REQUEST
      ),
      isSuccessSearchCharacters: isActionSuccess(
        store,
        CHARACTER_SEARCH_REQUEST
      ),
      isErrorSearchCharacters: isActionFailure(store, CHARACTER_SEARCH_REQUEST)
    };
  });

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccessGetCharacters) {
      setCharactersToList(characters);
    }
  }, [characters, isSuccessGetCharacters]);

  useEffect(() => {
    if (isSearchMode) {
      if (isSuccessSearchCharacters) {
        finishSearchingCharacters(characterSearch);
      }
    } else if (isSuccessGetCharacters) {
      setCharactersToList(characters);
    }
  }, [
    characterSearch,
    characters,
    isSearchMode,
    isSuccessGetCharacters,
    isSuccessSearchCharacters
  ]);

  useEffect(() => {
    if (isLoadingSearchCharacters) {
      setIsDoneSearchingCharacters(false);
    }
  }, [isLoadingGetCharacters, isLoadingSearchCharacters]);

  if (isErrorGetCharacters || isErrorSearchCharacters) {
    return (
      <Empty
        title="Ocorreu um erro ao buscar os personagens"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  if (isSearchMode && !isDoneSearchingCharacters) {
    return <Loading />;
  }

  return (
    <List characters={charactersToList} isLoading={isLoadingGetCharacters} />
  );
}
