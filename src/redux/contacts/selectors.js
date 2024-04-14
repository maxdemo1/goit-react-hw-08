export const contactsSelector = state => state.contacts.contacts.items;

export const loaderSelector = state => state.contacts.contacts.loading;

export const errorSelector = state => state.contacts.contacts.error;

export const hotToastAddSelector = state =>
  state.contacts.contacts.isHotToastAdd;

export const hotToastDeleteSelector = state =>
  state.contacts.contacts.isHotToastDelete;

export const hotToastEditSelector = state =>
  state.contacts.contacts.isHotToastEdit;

export const filterSelector = state => state.filters.query;
