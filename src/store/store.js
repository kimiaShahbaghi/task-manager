import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../reducer/listSlice";
const store = configureStore({
  reducer: {
    listReducer,
  },
});

export default store;
