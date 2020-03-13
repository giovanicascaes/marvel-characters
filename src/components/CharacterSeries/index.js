import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterSeries } from "./actions";
import Series from "./components/Series";
import {
  isActionLoading,
  isActionFailure,
  isActionSuccess
} from "services/api/reducer";
import { CHARACTER_GET_SERIES_REQUEST } from "./actions";
import { CHARACTER_GET_INFO_REQUEST } from "components/CharacterInfo/actions";
import { API_ITEMS_PER_PAGE } from "constants/parameters";

export default function CharcterSeries() {
  const [seriesToList, setSeriesToList] = useState(
    [...new Array(API_ITEMS_PER_PAGE.GET_SERIES)].map(() => ({
      title: "",
      description: "",
      thumbnail: {}
    }))
  );
  const { series, isLoading, isSuccess, isError } = useSelector(store => ({
    series: store.character.series,
    isLoading: isActionLoading(
      store,
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_INFO_REQUEST
    ),
    isSuccess: isActionSuccess(
      store,
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_INFO_REQUEST
    ),
    isError: isActionFailure(
      store,
      CHARACTER_GET_SERIES_REQUEST,
      CHARACTER_GET_INFO_REQUEST
    )
  }));
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(getCharacterSeries(characterId));
  }, [characterId, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      setSeriesToList(series);
    }
  }, [isSuccess, series]);

  if (isError) {
    return null;
  }

  return <Series isLoading={isLoading} series={seriesToList} />;
}
