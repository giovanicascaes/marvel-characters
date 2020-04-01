import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "./actions";
import Info from "./components/Info";
import { isActionLoading, isActionFailure } from "services/api/reducer";
import { CHARACTER_GET_INFO_REQUEST } from "./actions";
import { CHARACTER_GET_SERIES_REQUEST } from "scenes/CharacterDetails/components/CharacterSeries/actions";

export default function CharacterInfo() {
  const { character, isLoading, isError, isEditing } = useSelector(store => {
    const { info, series } = store.character;
    const { data, isEditing } = info;
    const { offset } = series;
    const isLoadingMoreSeries = offset !== undefined;

    return {
      character: data,
      isLoading:
        isActionLoading(
          store,
          CHARACTER_GET_INFO_REQUEST,
          CHARACTER_GET_SERIES_REQUEST
        ) && !isLoadingMoreSeries,
      isError: isActionFailure(
        store,
        CHARACTER_GET_INFO_REQUEST,
        CHARACTER_GET_SERIES_REQUEST
      ),
      isEditing
    };
  });
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(getCharacterInfo(characterId));
  }, [characterId, dispatch]);

  if (isError) {
    return null;
  }

  const { thumbnail, imageUrl, id, name, description } = character;

  const infoProps = isLoading
    ? {
        imageUrl: "",
        id: 0,
        name: "",
        description: ""
      }
    : {
        imageUrl: thumbnail
          ? `${thumbnail.path}.${thumbnail.extension}`
          : imageUrl || "",
        id,
        name,
        description
      };

  return <Info {...infoProps} isLoading={isLoading} isEditing={isEditing} />;
}
