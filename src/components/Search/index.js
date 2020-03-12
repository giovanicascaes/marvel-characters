import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCharacters,
  clearSearch
} from "components/CharacterList/actions";
import { Input } from "antd";

const { Search: SearchInput } = Input;

export default function Search() {
  const dispatch = useDispatch();
  const { characters, characterSearch } = useSelector(({ character }) => ({
    characterSearch: character.characterSearch,
    characters: character.characters
  }));

  function search(searchText) {
    if (!searchText) {
      dispatch(clearSearch());
    } else {
      dispatch(searchCharacters(searchText));
    }
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <SearchInput
        placeholder="Search a character"
        enterButton="Search"
        size="large"
        onSearch={search}
        allowClear
      />
    </div>
  );
}
