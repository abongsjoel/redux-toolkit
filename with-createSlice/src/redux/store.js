import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./stories";

const store = configureStore({
  reducer: { stories: storiesReducer },
});

export default store;
