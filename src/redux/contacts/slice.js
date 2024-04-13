import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsPendingCase = state => {
  state.contacts.loading = true;
  state.contacts.error = null;
};

const contactsErrorCase = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
  state.contacts.items = [];
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
      })

      .addCase(addContact.pending, contactsPendingCase)
      .addCase(addContact.rejected, contactsErrorCase)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
