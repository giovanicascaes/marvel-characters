import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "./actions";
import List from "./components/List";
import Empty from "../Empty";
import { API_ITEMS_PER_PAGE } from "constants/parameters";
import {
  isLoadingCharacters,
  hasGottenCharacters,
  hasFailedGettingCharacters
} from "api/statusReducer";

export default function CharacterList() {
  const [charactersToList, setCharactersToList] = useState(
    [...new Array(API_ITEMS_PER_PAGE.GET_CHARACTERS)].map(() => ({
      name: "",
      thumbnail: {}
    }))
  );

  const dispatch = useDispatch();
  const { characters, isLoading, isSuccess, isError } = useSelector(store => {
    const { characters } = store.character;
    return {
      characters,
      isLoading: isLoadingCharacters(store),
      isSuccess: hasGottenCharacters(store),
      isError: hasFailedGettingCharacters(store)
    };
  });

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      setCharactersToList(characters);
    }
  }, [characters, isSuccess]);

  if (isError) {
    return (
      <Empty
        title="Ocorreu um erro ao buscar os personagens"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  return <List characters={charactersToList} isLoading={isLoading} />;
}
