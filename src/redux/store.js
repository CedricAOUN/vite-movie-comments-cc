import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";

const store = configureStore({
  reducer: {
    todos: commentReducer 
  }
});
export default store;