import React from "react";
import { useSelector } from "react-redux";
import Get from "./components/Get";
import Search from "./components/Search";

export default function CharacterList() {
  const isSearchMode = useSelector(store => store.characters.isSearchMode);

  if (isSearchMode) return <Search />;

  return <Get />;
}
