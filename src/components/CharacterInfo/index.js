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

export default function CharcterInfo() {
  const { character, isLoading, isSuccess, isError } = useSelector(store => ({
    character: store.character.info,
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
    )
  }));
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(getCharacterInfo(characterId));
  }, [characterId, dispatch]);

  if (isError) {
    return null;
  }

  const { thumbnail, id, name, description } = character;

  const infoProps = isSuccess
    ? {
        imageUrl: `${thumbnail.path}.${thumbnail.extension}`,
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

  return <Info isLoading={isLoading} {...infoProps} />;
}
