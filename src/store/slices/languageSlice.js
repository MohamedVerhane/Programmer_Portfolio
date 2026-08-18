import { createSlice } from "@reduxjs/toolkit"

const getInitialLang = () => {
  if (typeof window === "undefined") return "en"
  return localStorage.getItem("lang") || "en"
}

const languageSlice = createSlice({
  name: "language",
  initialState: { value: getInitialLang() },
  reducers: {
    setLang(state, action) {
      state.value = action.payload
    },
  },
})

export const { setLang } = languageSlice.actions
export default languageSlice.reducer

export const selectLang = (state) => state.language.value
