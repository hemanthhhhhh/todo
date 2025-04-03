import React from "react";
import useTaskList from "../custom-hooks/useTaskList";

const TaskList = () => {
  const { loading, error, filter, searchQuery, setFilter, setSearchQuery } = useTaskList();

  if (loading) {
    return <div>Tasks Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-indigo-500">Tasks</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TaskList;
