import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slicer";

export const store = configureStore({
  reducer: {
    uiSlice: uiSlice,
  },
});
