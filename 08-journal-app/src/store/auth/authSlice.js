import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', //checking, notAuthenticated, Authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: ( state, { payload } ) => {
      state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
  },
    logout: (state, { payload }) => {
      state.status = 'notAuthenticated', //checking, notAuthenticated, Authenticated
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state, action) => {
      state.status = 'checking';
    },
  },
});
export const { login, logout, checkingCredentials } = authSlice.actions;
