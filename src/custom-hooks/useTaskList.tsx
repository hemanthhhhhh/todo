import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDos, setFilter, setSearchQuery } from "../features/taskSlice";
import type { RootState, AppDispatch } from "../features/Store";

const useTaskList = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const error = useSelector((state: RootState) => state.tasks.error);
  const filter = useSelector((state: RootState) => state.tasks.filter);
  const searchQuery = useSelector((state: RootState) => state.tasks.searchQuery);

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  return {
    loading,
    error,
    filter,
    searchQuery,
    setFilter: (value) => dispatch(setFilter(value)),
    setSearchQuery: (value) => dispatch(setSearchQuery(value)),
  };
};

export default useTaskList;
