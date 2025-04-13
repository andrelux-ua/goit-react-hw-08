import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsError = state => state.contacts.isError;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter.toLowerCase();

    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(lowercasedFilter) ||
          contact.number.includes(lowercasedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
