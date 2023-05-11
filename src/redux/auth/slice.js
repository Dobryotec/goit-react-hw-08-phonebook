import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './thunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;