import React from "react";
import Emptiable from "components/Emptiable";
import Grid from "./components/Grid";

export default function List({ characters, isLoading }) {
  return (
    <Emptiable>
      {characters.length && (
        <Grid characters={characters} isLoading={isLoading} />
      )}
    </Emptiable>
  );
}
