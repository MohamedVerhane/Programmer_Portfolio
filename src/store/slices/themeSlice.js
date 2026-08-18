import { createSlice } from "@reduxjs/toolkit"

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark"
  const stored = localStorage.getItem("theme")
  if (stored) return stored
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
}

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: getInitialTheme() },
  reducers: {
    toggleTheme(state) {
      state.value = state.value === "dark" ? "light" : "dark"
    },
    setTheme(state, action) {
      state.value = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
