import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "Completed" | "Pending" | "To Do";
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  status: "All" | "Completed" | "Pending" | "To Do";
  filter: string;
  searchQuery: string;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
  filter: "All",
  searchQuery: "",
};

// Corrected API URL
export const fetchToDos = createAsyncThunk<Task[]>(
  "tasks/fetchToDos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await response.json();
    return data.map((task: { id: number; title: string; completed: boolean }) => ({
      id: task.id,
      title: task.title,
      description: "",
      status: task.completed ? "Completed" : "Pending",
    }));
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToDos.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      });
  },
});

export const { addTask, editTask, deleteTask, setFilter, setSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;
