import { createReducer } from "@reduxjs/toolkit";
import { readUsers } from "../actions/usersActions";

const initialState = {all:null};
export const usersReducer = createReducer(initialState, (buider) =>
    buider.addCase(readUsers.fulfilled, (state, action) => {
        return { ...state, all: action.payload };
    })
);
