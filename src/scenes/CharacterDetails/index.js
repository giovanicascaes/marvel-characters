import React from "react";
import { useSelector } from "react-redux";
import CharacterInfo from "components/CharacterInfo";
import CharacterSeries from "components/CharacterSeries";
import { isActionFailure } from "services/api/reducer";
import { CHARACTER_GET_INFO_REQUEST } from "components/CharacterInfo/actions";
import { CHARACTER_GET_SERIES_REQUEST } from "components/CharacterSeries/actions";
import Message from "components/Message";
import Header from "./components/Header";

export default function CharacterDetails() {
  const { isError } = useSelector(store => ({
    isError: isActionFailure(
      store,
      CHARACTER_GET_INFO_REQUEST,
      CHARACTER_GET_SERIES_REQUEST
    )
  }));

  if (isError) {
    return (
      <Message
        title="Ocorreu um erro ao buscar os detalhes do personagem"
        subtitle="Por favor, tente novamente mais tarde"
      />
    );
  }

  return (
    <>
      <Header />
      <CharacterInfo />
      <CharacterSeries />
    </>
  );
}
