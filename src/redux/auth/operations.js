import { createAsyncThunk, current, isRejectedWithValue } from "@reduxjs/toolkit";
import { clearTocen, goItApi, setToken } from "../../config/goItApi";



export const registerThunk = createAsyncThunk('register', async(credentials, thunkAPI) =>{
    try {
        const {data} = await goItApi.post('users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})

export const loginThunk = createAsyncThunk('login', async(credentials, thunkAPI) =>{
    try {
        const {data} = await goItApi.post('users/login', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})

export const LoguotThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await goItApi.post('users/logout');
        clearTocen();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})

export const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
        return thunkAPI.rejectWithValue('Token is not exist!');
    }
    try {
        setToken(savedToken);
        const {data} = await goItApi.get('users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})