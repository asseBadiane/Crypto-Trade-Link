import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
      signInSuccess: (state, action) => {
        state.loading = false
        state.currentUser = action.payload
        state.error = null
    },
      signInError: (state, action) => {
        state.loading = false
        state.error = action.payload
     
    },
    updateUserStart: (state) => {
      state.loading = true
    },
    updateUserSuccess: (state, action) => {
        state.loading = false
        state.currentUser = action.payload
        state.error = null
    },
    updateUserError: (state, action) => {
        state.loading = false
        state.error = action.payload
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInError, updateUserStart, updateUserSuccess, updateUserError } = userSlice.actions

export default userSlice.reducer