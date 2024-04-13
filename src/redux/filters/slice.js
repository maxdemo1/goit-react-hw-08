import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { query: '' };

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
