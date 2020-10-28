import { useState, useEffect } from "react";
import { GenresMap } from "../../api/transform/transform-movie";

const DEFAULT_LIST_SIZE = 6;
const ADDED_COUNT_TO_LIST = 4;

export const useFilter = (movies) => {
  const [list, setList] = useState([]);
  const [listSize, setListSize] = useState(DEFAULT_LIST_SIZE);
  const [activeFilter, setActiveFilter] = useState(GenresMap.All);

  useEffect(() => {
    const filtered =
      activeFilter === GenresMap.All
        ? movies
        : movies.filter((item) => item.genreId === activeFilter);
    setList(filtered);
  }, [movies, activeFilter]);

  const handleSetListSize = () => {
    setListSize(listSize + ADDED_COUNT_TO_LIST);
  };

  return {
    isShowMoreButtonVisible: list.length > listSize,
    list: list.slice(0, listSize),
    activeFilter,
    setListSize: handleSetListSize,
    setActiveFilter
  };
};
