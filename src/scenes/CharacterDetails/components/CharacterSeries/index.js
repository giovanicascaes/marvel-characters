import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterSeries, clearSeries } from "./actions";
import Series from "./components/Series";
import {
  isActionLoading,
  isActionFailure,
  isActionSuccess
} from "services/api/reducer";
import { CHARACTER_GET_SERIES_REQUEST } from "./actions";
import { CHARACTER_GET_INFO_REQUEST } from "scenes/CharacterDetails/components/CharacterInfo/actions";
import { API_ITEMS_PER_PAGE } from "constants/parameters";
import usePrevious from "utils/hooks/usePrevious";

function getLoadingList(countInNextPage) {
  console.log("count:", countInNextPage);
  return [...new Array(countInNextPage || API_ITEMS_PER_PAGE.GET_SERIES)].map(
    () => ({
      id: 0,
      title: "",
      description: "",
      thumbnail: null
    })
  );
}

export default function CharcterSeries() {
  const {
    series,
    isLoading,
    isSuccess,
    isError,
    hasMoreToLoad,
    countInNextPage
  } = useSelector(store => {
    const { series, total, offset, count } = store.character.series;
    const hasMoreToLoad = offset + count < total;
    let countInNextPage;

    if (hasMoreToLoad) {
      const remainingCharacters = total - offset + count;

      if (remainingCharacters > API_ITEMS_PER_PAGE.GET_SERIES) {
        countInNextPage = API_ITEMS_PER_PAGE.GET_SERIES;
      } else {
        countInNextPage = remainingCharacters;
      }
    }

    return {
      series,
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
      ),
      hasMoreToLoad,
      countInNextPage
    };
  });

  const [seriesToList, setSeriesToList] = useState([]);
  const prevIsLoading = usePrevious(isLoading);
  const dispatch = useDispatch();
  const { characterId } = useParams();

  const requestSeries = useCallback(() => {
    dispatch(getCharacterSeries(characterId));
  }, [characterId, dispatch]);

  useEffect(() => {
    dispatch(clearSeries());
  }, [dispatch]);

  useEffect(() => {
    if (!series.length) requestSeries();
  }, [requestSeries, series.length]);

  useEffect(() => {
    if (isLoading) {
      setSeriesToList(current => [
        ...current,
        ...getLoadingList(countInNextPage)
      ]);
    }
  }, [isLoading, countInNextPage]);

  useEffect(() => {
    if (prevIsLoading && isSuccess) {
      setSeriesToList(series);
    }
  }, [isSuccess, prevIsLoading, series]);

  if (isError) {
    return null;
  }

  return (
    <Series
      isLoading={isLoading}
      series={seriesToList}
      hasMoreToLoad={hasMoreToLoad}
      onLoadMore={requestSeries}
    />
  );
}
