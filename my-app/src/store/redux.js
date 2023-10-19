import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import userAuthReducer from "./user-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: userAuthReducer,
  },
});

export default store;
