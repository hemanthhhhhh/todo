import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDos, setFilter, setSearchQuery } from "../features/taskSlice";

const useTaskList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const filter = useSelector((state) => state.tasks.filter);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

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
