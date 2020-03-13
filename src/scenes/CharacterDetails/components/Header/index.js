import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styles";
import { Button } from "antd";
import { editCharacter } from "components/CharacterInfo/actions";
import { CHARACTER_GET_INFO_REQUEST } from "components/CharacterInfo/actions";
import { CHARACTER_GET_SERIES_REQUEST } from "components/CharacterSeries/actions";
import { isActionLoading } from "services/api/reducer";

export default function Header() {
  const dispatch = useDispatch();
  const isLoadingCharacter = useSelector(store =>
    isActionLoading(
      store,
      CHARACTER_GET_INFO_REQUEST,
      CHARACTER_GET_SERIES_REQUEST
    )
  );

  const onEdit = () => dispatch(editCharacter());

  return (
    <Wrapper>
      <Button
        type="link"
        onClick={onEdit}
        style={{ visibility: isLoadingCharacter ? "hidden" : "visible" }}
      >
        Edit
      </Button>
    </Wrapper>
  );
}
