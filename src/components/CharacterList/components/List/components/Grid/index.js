import React from "react";
import CharacterCard from "components/CharacterCard";
import { Wrapper } from "./styles";

export default function Grid({ characters, isLoading }) {
  return (
    <Wrapper>
      {characters.map(({ id, name, thumbnail, imageUrl }, index) => (
        <CharacterCard
          key={index}
          id={id}
          name={name}
          imageUrl={
            thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : imageUrl
          }
          isLoading={isLoading}
        />
      ))}
    </Wrapper>
  );
}
