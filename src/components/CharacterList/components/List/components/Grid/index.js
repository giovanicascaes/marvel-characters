import React from "react";
import CharacterCard from "components/CharacterCard";
import { Wrapper } from "./styles";

export default function Grid({ characters, isLoading }) {
  return (
    <Wrapper>
      {characters.map(({ name, thumbnail }, index) => {
        const { path, extension } = thumbnail;
        return (
          <CharacterCard
            key={index}
            name={name}
            url={`${path}.${extension}`}
            isLoading={isLoading}
          />
        );
      })}
    </Wrapper>
  );
}
