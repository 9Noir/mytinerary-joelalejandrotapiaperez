import { createReducer } from "@reduxjs/toolkit";
import { auth, readLikes, signin, signout, signup, tokenSignin } from "../actions/authActions";

const initialState = { user: null, token: null, isLoggedIn: false, likes: null };
export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(auth, (state, action) => {
            return { ...state, user: action.payload, isLoggedIn: true };
        })
        .addCase(signup.fulfilled, (state) => {})
        .addCase(signin.fulfilled, (state, action) => {
            const { user, token } = action.payload;
            return { ...state, user: user, token: token, isLoggedIn: true };
        })
        .addCase(signout.fulfilled, (state) => {
            return { ...state, user: null, token: null, isLoggedIn: false };
        })
        .addCase(tokenSignin.fulfilled, (state, action) => {
            const { user, token } = action.payload;
            return { ...state, user: user, token: token, isLoggedIn: true };
        })
        .addCase(readLikes.fulfilled, (state, action) => {
            state.likes = action.payload;
        })
);
