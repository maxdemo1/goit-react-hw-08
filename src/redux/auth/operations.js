import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosAuthInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setUserToken = token => {
  axiosAuthInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearUserToken = () => {
  axiosAuthInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data: response } = await axiosAuthInstance.post(
        '/users/signup',
        userData
      );
      setUserToken(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data: response } = await axiosAuthInstance.post(
        '/users/login',
        userData
      );
      setUserToken(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data: response } = await axiosAuthInstance.post('/users/logout');
    clearUserToken();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setUserToken(token);
      const { data: response } = await axiosAuthInstance.get('/users/current');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
