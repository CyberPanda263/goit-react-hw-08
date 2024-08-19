import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk, loginThunk, LogoutThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
    isError: '',
    isLoginError: false,
    isRegisterError: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRegisterError = false;
            state.isLoginError = false;
        })
        .addCase(registerThunk.rejected, (state, action) => {
            state.isRegisterError = action.payload;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.errorMessage = '';
            state.isLoginError = false;
            state.isRegisterError = false;
        })
        .addCase(loginThunk.rejected, (state, action) => {
            state.isLoginError = action.payload;
        })
        .addCase(getMeThunk.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
        })
        .addCase(getMeThunk.pending, (state, action) => {
            state.isRefreshing = true;
        })
        .addCase(getMeThunk.rejected, (state, action) => {
            state.isRefreshing = false;
            state.isError = action.payload;
        })
        .addCase(LogoutThunk.fulfilled, (state, action) => {
            return initialState
        })
    }
})

export const authReducer = slice.reducer;