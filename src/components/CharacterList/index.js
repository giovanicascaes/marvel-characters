import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./actions";
import List from "./components/List";
import Empty from "../Empty";
import { API_ITEMS_PER_PAGE } from "constants/parameters";
import { isActionLoading, isActionSuccess, isActionFailure } from "api/reducer";
import {
  CHARACTER_GET_REQUEST,
  CHARACTER_SEARCH_REQUEST
} from "components/CharacterList/actions";
import Loading from "components/Loading";

export default function CharacterList() {
  const [charactersToList, setCharactersToList] = useState(
    [...new Array(API_ITEMS_PER_PAGE.GET_CHARACTERS)].map(() => ({
      name: "",
      thumbnail: {}
    }))
  );

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
    const { characters, characterSearch, isSearchMode } = store.character;
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
        setCharactersToList(characterSearch);
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

  if (isErrorGetCharacters || isErrorSearchCharacters) {
    return (
      <Empty
        title="Ocorreu um erro ao buscar os personagens"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  if (isLoadingSearchCharacters) {
    return <Loading />;
  }

  return (
    <List characters={charactersToList} isLoading={isLoadingGetCharacters} />
  );
}
