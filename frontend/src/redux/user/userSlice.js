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
      signInFailure: (state, action) => {
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
    updateUserFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
     
    },
    deleteUserStart: (state) => {
      state.loading = true
    },
    deleteUserSuccess: (state, action) => {
        state.loading = false
        state.currentUser = null
        state.error = null
    },
    deleteUserFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
     
    },
    signOutStart: (state) => {
      state.loading = true
    },
    signOutSuccess: (state, action) => {
        state.loading = false
        state.currentUser = action.payload
        state.error = null
    },
    signOutFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
     
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure
} = userSlice.actions

export default userSlice.reducer