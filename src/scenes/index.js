import React from "react";
import { useSelector } from "react-redux";
import Router from "./components/Router";

export default function Routes() {
  const { characterName, characterId } = useSelector(({ character }) => {
    const { name, id } = character.info.data;
    return {
      characterName: name,
      characterId: id
    };
  });

  return <Router characterName={characterName} characterId={characterId} />;
}
