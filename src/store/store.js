import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import userDataReducer from "./reducers/userData"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer
  },
});
