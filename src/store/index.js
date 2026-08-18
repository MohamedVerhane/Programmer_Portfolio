import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./slices/themeSlice"
import languageReducer from "./slices/languageSlice"
import uiReducer from "./slices/uiSlice"
import contactReducer from "./slices/contactSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      language: languageReducer,
      ui: uiReducer,
      contact: contactReducer,
    },
  })
