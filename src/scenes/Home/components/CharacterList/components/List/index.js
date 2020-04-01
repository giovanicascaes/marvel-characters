import React from "react";
import Emptiable from "components/Emptiable";
import Grid from "./components/Grid";

export default function List({
  characters,
  isLoading,
  hasMoreToLoad,
  onLoadMore
}) {
  return (
    <Emptiable>
      {characters.length && (
        <Grid
          characters={characters}
          isLoading={isLoading}
          hasMoreToLoad={hasMoreToLoad}
          onLoadMore={onLoadMore}
        />
      )}
    </Emptiable>
  );
}
