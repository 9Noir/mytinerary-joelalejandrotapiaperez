import { createReducer } from "@reduxjs/toolkit";
import { auth, signin, signout, signup, tokenSignin, userUpdate } from "../actions/authActions";

const initialState = { user: null, token: null, isLoggedIn: false, likes: null, response: { success: null, message: null, key: null } };
export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(auth, (state, action) => {
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                response: {
                    success: true,
                    message: action.payload ? "LOGIN_SUCCESS" : "LOGOUT_SUCCESS",
                    key: Date.now(),
                },
            };
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.response = action.payload;
            state.response.key = Date.now();
        })
        .addCase(signin.fulfilled, (state, action) => ({
            ...state,
            user: action.payload.response?.user,
            token: action.payload.response?.token,
            isLoggedIn: true,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(signin.rejected, (state, action) => ({
            ...state,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(signout.fulfilled, (state, action) => ({
            ...state,
            user: null,
            token: null,
            isLoggedIn: false,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(tokenSignin.fulfilled, (state, action) => {
            const { user, token } = action.payload;
            return { ...state, user: user, token: token, isLoggedIn: true };
        })
        .addCase(userUpdate.fulfilled, (state, action) => ({
            ...state,
            user: action.payload.response,
            token: action.payload.token,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(userUpdate.rejected, (state, action) => ({
            ...state,
            response: {
                success: false,
                message: action.error.message,
                key: Date.now(),
            },
        }))
);
