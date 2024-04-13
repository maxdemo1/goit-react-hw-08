import { createSelector } from '@reduxjs/toolkit';
import { contactsSelector } from '../contacts/selectors';

export const filterSelector = state => state.filters.query;

export const selectFilteredContacts = createSelector(
  [contactsSelector, filterSelector],
  (contactsData, filter) => {
    if (filter === '') return contactsData;
    return contactsData.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
