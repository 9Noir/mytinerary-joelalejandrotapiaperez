import { createReducer } from "@reduxjs/toolkit";
import { clearUserData, readUsers, readLikes, readComments, readUserItineraries } from "../actions/usersActions";

const initialState = { all: null, likes: null, comments: null, itineraries: null };
export const usersReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(clearUserData, (state) => ({ ...state, likes: null, comments: null, itineraries: null }))
        .addCase(readUsers.fulfilled, (state, action) => {
            return { ...state, all: action.payload };
        })
        .addCase(readLikes.fulfilled, (state, action) => {
            state.likes = action.payload;
        })
        .addCase(readComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
        .addCase(readUserItineraries.fulfilled, (state, action) => {
            state.itineraries = action.payload;
        })
);
