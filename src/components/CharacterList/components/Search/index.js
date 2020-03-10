import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCharacters } from "../../actions";
import { Input } from "antd";

const { Search } = Input;

export default function Search() {
    const dispatch = useDispatch();
    const { characters, isLoading, isError } = useSelector(({ character }) => {
        const { characters, status } = character;
        return {
        characters,
        isLoading: status === PENDING,
        isError: status === REJECTED
        };
    });

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    function search(value) {

    }

    return (
      <Search
        placeholder="Search a character"
        enterButton="Search"
        size="large"
        onSearch={value => }
      />
    );
}
