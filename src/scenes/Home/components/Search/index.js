import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCharacters,
  clearSearch
} from "scenes/Home/components/CharacterList/components/Search/actions";
import { Input } from "antd";

const { Search: SearchInput } = Input;

export default function Search() {
  const storedSearchText = useSelector(
    store => store.characters.search.searchText
  );
  const [searchText, setSearchText] = useState(storedSearchText);
  const dispatch = useDispatch();

  function search(value) {
    if (!value) {
      dispatch(clearSearch());
    } else {
      dispatch(searchCharacters(value));
    }
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <SearchInput
        placeholder="Search a character"
        enterButton="Search"
        size="large"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onSearch={search}
        allowClear
      />
    </div>
  );
}
