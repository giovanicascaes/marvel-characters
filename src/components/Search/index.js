import React from "react";
import { useDispatch } from "react-redux";
import { searchCharacters, clearSearch } from "components/Search/actions";
import { Input } from "antd";

const { Search: SearchInput } = Input;

export default function Search() {
  const dispatch = useDispatch();

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
