import React from "react";
import CharacterList from "components/CharacterList";
import Search from "components/Search";

export default function Home() {
  return (
    <>
      <Search />
      <CharacterList />
    </>
  );
}
