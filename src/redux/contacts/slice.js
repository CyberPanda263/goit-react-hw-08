import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, changeContact } from "./operations";
import { LogoutThunk } from "../auth/operations";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    isModalOpen: false,
    modalType: '',
    currentContactId: '',
    currentName: '',
    currentNumber: '',
}

const slice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        openModal: (state, action) => {
          state.isModalOpen = true;
          state.modalType = action.payload.type;
          state.currentContactId = action.payload.id;
          state.currentName = action.payload.name;
          state.currentNumber = action.payload.number;
        },
        closeModal: (state, action) => {
          state.isModalOpen = false;
          state.modalType = '';
          state.currentContactId = '';
          state.name = '';
          state.number = '';
        },
        isAddedContact: (state, action) => {
            state.currentName = action.payload.name;
            state.currentNumber = action.payload.number;
        }
      },
    
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.isError = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(changeContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(LogoutThunk.fulfilled, (state, action) => {
            return initialState
        })
    }
})

export const contactReduser = slice.reducer;
export const { modalIsOpen } = slice.actions;
export const { openModal, closeModal, isAddedContact } = slice.actions;

export default slice.reducer;

