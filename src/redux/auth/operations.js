import { createAsyncThunk} from "@reduxjs/toolkit";
import { clearAuthHeader, goItApi, setAuthHeader } from "../../config/goItApi";



export const registerThunk = createAsyncThunk('register', async(credentials, thunkAPI) => {
    try {
        const res = await goItApi.post('users/signup', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return thunkAPI.rejectWithValue('400');
          }
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const loginThunk = createAsyncThunk('login', async(credentials, thunkAPI) => {
    try {
        const res = await goItApi.post('users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return thunkAPI.rejectWithValue('400');
          }
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const LogoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await goItApi.post('users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getMeThunk = createAsyncThunk('getMe', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
        return thunkAPI.rejectWithValue('Token is not exist!');
    }
    try {
        setAuthHeader(savedToken);
        const res = await goItApi.get('users/current');
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 500) {
            return thunkAPI.rejectWithValue('Network Error');
          }
        return thunkAPI.rejectWithValue(error.message);
    }

})