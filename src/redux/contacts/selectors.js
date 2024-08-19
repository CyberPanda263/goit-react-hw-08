import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contact.items
export const selectIsLoading = state => state.contact.isLoading
export const selectIsErrorContacts = state => state.contact.isError
export const selectisModalOpen = state => state.contact.isModalOpen
export const selectModalType = state => state.contact.modalType
export const selectCurrentContactId = state => state.contact.currentContactId
export const selectCurrentName = state => state.contact.currentName
export const selectCurrentNumber = state => state.contact.currentNumber
export const selectIsAddedContact = state => state.contact.isAdded

/*
export const selectIsAddedContactsMemo = createSelector(
    [selectContacts, selectIsAddedContact],
    (contacts, value) =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase()) || contact.number.toLowerCase().includes(value.toLowerCase()),
      ),
  );*/
/*
  export const selectIsAddedContactsMemo = createSelector(
    [selectContacts, selectIsAddedContact],
    (contacts, value) => {
        if (!value) return contacts.map(contact => ({ contact, matchedFields: [] }));

        const normalizedValue = value.toLowerCase();

        return contacts.map(contact => {
            const matchedFields = [];

            if (contact.name.toLowerCase().includes(normalizedValue)) {
                matchedFields.push('name');
            }

            if (contact.number.toLowerCase().includes(normalizedValue)) {
                matchedFields.push('number');
            }

            return {
                contact,
                matchedFields
            };
        }).filter(({ matchedFields }) => matchedFields.length > 0);
    }
);*/