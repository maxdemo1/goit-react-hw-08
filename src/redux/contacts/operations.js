import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const { data } = await axios.get('/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const { data: response } = await axios.post(
        '/contacts',
        { ...contactData },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const { data } = await axios.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (newContactData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const { data: response } = await axios.patch(
        `/contacts/${newContactData.id}`,
        { name: newContactData.name, number: newContactData.number },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
