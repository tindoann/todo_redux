import { confgigureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

export default confgigureStore({
  reducer: {
    todos: todoReducer,
  },
});
