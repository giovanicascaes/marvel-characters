import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styles";
import { Button } from "antd";
import { toggleEditCharacter } from "scenes/CharacterDetails/components/CharacterInfo/actions";
import { CHARACTER_GET_INFO_REQUEST } from "scenes/CharacterDetails/components/CharacterInfo/actions";
import { CHARACTER_GET_SERIES_REQUEST } from "scenes/CharacterDetails/components/CharacterSeries/actions";
import { isActionLoading } from "services/api/reducer";

export default function Header() {
  const dispatch = useDispatch();
  const { isLoadingCharacter, isEditing } = useSelector(store => ({
    isLoadingCharacter: isActionLoading(
      store,
      CHARACTER_GET_INFO_REQUEST,
      CHARACTER_GET_SERIES_REQUEST
    ),
    isEditing: store.character.info.isEditing
  }));

  const onEdit = () => dispatch(toggleEditCharacter());

  return (
    <Wrapper>
      <Button
        type="link"
        onClick={onEdit}
        style={{ visibility: isLoadingCharacter ? "hidden" : "visible" }}
      >
        {isEditing ? "Cancel" : "Edit"}
      </Button>
    </Wrapper>
  );
}
