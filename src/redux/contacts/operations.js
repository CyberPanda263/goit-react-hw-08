import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../../config/goItApi";

export const fetchContacts = createAsyncThunk('contacts/fetchAl', async (_, thunkApi) => {
    try {
        const { data } = await goItApi.get('contacts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkApi) => {
    try {
        const { data } = await goItApi.post('contacts', body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const changeContact = createAsyncThunk('contacts/changeContact', async ({ id, body }, thunkApi) => {
    try {
        const { data } = await goItApi.patch(`contacts/${id}`, body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await goItApi.delete(`contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

