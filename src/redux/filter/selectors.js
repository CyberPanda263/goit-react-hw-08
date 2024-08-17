import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = state => state.filter.filter;

export const selectFilteredContactsMemo = createSelector(
    [selectContacts, selectFilter],
    (contacts, value) =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase()) || contact.number.toLowerCase().includes(value.toLowerCase()),
      ),
  );