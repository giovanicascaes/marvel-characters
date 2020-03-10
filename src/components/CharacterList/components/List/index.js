import React from "react";
import EmptiableList from "components/EmptiableList";
import Grid from "./components/Grid";

export default function List({ characters, isLoading }) {
  return (
    <EmptiableList>
      {characters && <Grid characters={characters} isLoading={isLoading} />}
    </EmptiableList>
  );
}
