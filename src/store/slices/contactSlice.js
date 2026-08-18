import { createSlice } from "@reduxjs/toolkit"

const contactSlice = createSlice({
  name: "contact",
  initialState: { status: "" },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },
    clearStatus(state) {
      state.status = ""
    },
  },
})

export const { setStatus, clearStatus } = contactSlice.actions
export default contactSlice.reducer
