import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { logout } from '../auth/operations';

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
    isHotToastDelete: false,
    isHotToastAdd: false,
    isHotToastEdit: false,
    isHotToastIncorectData: false,
  },
};

const contactsPendingCase = state => {
  state.contacts.loading = true;
  state.contacts.error = null;
  state.contacts.isHotToastDelete = false;
  state.contacts.isHotToastAdd = false;
  state.contacts.isHotToastEdit = false;
};

const contactsErrorCase = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
  state.contacts.items = [];
  state.contacts.isHotToastDelete = false;
  state.contacts.isHotToastAdd = false;
  state.contacts.isHotToastEdit = false;
};

const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, contactsPendingCase)
      .addCase(fetchContacts.rejected, contactsErrorCase)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })

      .addCase(deleteContact.pending, contactsPendingCase)
      .addCase(deleteContact.rejected, contactsErrorCase)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const indexToDelete = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items.splice(indexToDelete, 1);
        state.contacts.loading = false;
        state.contacts.isHotToastDelete = true;
      })

      .addCase(addContact.pending, contactsPendingCase)
      .addCase(addContact.rejected, contactsErrorCase)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
        state.contacts.isHotToastAdd = true;
      })
      .addCase(editContact.pending, contactsPendingCase)
      .addCase(editContact.rejected, state => (state.contacts.loading = false))
      .addCase(editContact.fulfilled, (state, action) => {
        const targetIndex = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items[targetIndex] = action.payload;
        state.contacts.loading = false;
        state.contacts.isHotToastEdit = true;
      })
      .addCase(logout.fulfilled, state => {
        state.contacts.loading = false;
        state.contacts.error = false;
        state.contacts.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
