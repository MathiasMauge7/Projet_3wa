import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import dogReducer from "./dogSlice";

const store = configureStore({
  reducer: {
    client: clientReducer,
    dog: dogReducer,
  },
});

export default store;
