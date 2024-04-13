import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user = { ...action.payload.user };
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user = { ...action.payload.user };
      })

      .addCase(logout.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = { ...action.payload };
      })

      .addMatcher(
        isAnyOf(refreshUser.pending, login.pending, register.pending),
        state => {
          state.isLoggedIn = false;
          state.isRefreshing = true;
        }
      )

      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.fulfilled,
          refreshUser.rejected
        ),
        () => {
          return INITIAL_STATE;
        }
      ),
});

export const authReducer = authSlice.reducer;
