import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "./actions";
import Info from "./components/Info";
import {
  isActionLoading,
  isActionSuccess,
  isActionFailure
} from "services/api/reducer";
import { CHARACTER_GET_INFO_REQUEST } from "./actions";
import { CHARACTER_GET_SERIES_REQUEST } from "components/CharacterSeries/actions";

export default function CharacterInfo() {
  const { character, isLoading, isSuccess, isError, isEditing } = useSelector(
    store => {
      const { data, isEditing } = store.character.info;
      return {
        character: data,
        isLoading: isActionLoading(
          store,
          CHARACTER_GET_INFO_REQUEST,
          CHARACTER_GET_SERIES_REQUEST
        ),
        isSuccess: isActionSuccess(
          store,
          CHARACTER_GET_INFO_REQUEST,
          CHARACTER_GET_SERIES_REQUEST
        ),
        isError: isActionFailure(
          store,
          CHARACTER_GET_INFO_REQUEST,
          CHARACTER_GET_SERIES_REQUEST
        ),
        isEditing
      };
    }
  );
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(getCharacterInfo(characterId));
  }, [characterId, dispatch]);

  if (isError) {
    return null;
  }

  const { thumbnail, imageUrl, id, name, description } = character;

  const infoProps = isSuccess
    ? {
        imageUrl: thumbnail
          ? `${thumbnail.path}.${thumbnail.extension}`
          : imageUrl,
        id,
        name,
        description
      }
    : {
        imageUrl: "",
        id: 0,
        name: "",
        description: ""
      };

  return <Info {...infoProps} isLoading={isLoading} isEditing={isEditing} />;
}
