import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, changeContact } from "./operations";


const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    isModalOpen: false,
}

const slice = createSlice({
    name: 'contact',
    initialState,

    reducers: {
        modalIsOpen: (state, action) => {
            state.isModalOpen = true;
        },
        maodalIsClose: (state, action) => {
            state.isModalOpen = false;
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
        .addCase(addContact.rejected, (state, action) => {
            state.isError = true;
        })
        .addCase(changeContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        })
        .addCase(changeContact.rejected, (state, action) => {
            state.isError = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isError = true;
        })
    }
})

export const contactReduser = slice.reducer;
export const modalIsOpen = slice.actions;
export const maodalIsClose = slice.actions;

