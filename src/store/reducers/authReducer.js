import { createReducer } from "@reduxjs/toolkit";
import { auth, readLikes } from "../actions/authActions";

const initialState = { user: null, isLoggedIn: false, likes: null };
export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(auth, (state, action) => {
            return { ...state, user: action.payload, isLoggedIn: true };
        })
        .addCase(readLikes.fulfilled, (state, action) => {
            state.likes = action.payload;
        })
);
