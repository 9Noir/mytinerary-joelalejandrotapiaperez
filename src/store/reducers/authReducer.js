import { createReducer } from "@reduxjs/toolkit";
import { auth, signin, signinGoogle, signinStep1, signout, signup, signupStep1, tokenSignin, userUpdate, sendPasswordRecovery } from "../actions/authActions";

const initialState = { user: null, token: null, likes: null, response: { success: null, message: null, key: null }, photo: null, role: null };
export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(auth, (state, action) => {
            return {
                ...state,
                user: action.payload,
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
        .addCase(signupStep1.fulfilled, (state, action) => ({
            ...state,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(signinGoogle.fulfilled, (state, action) => ({
            ...state,
            user: action.payload.response?.user,
            token: action.payload.response?.token,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(signin.fulfilled, (state, action) => ({
            ...state,
            user: action.payload.response?.user,
            token: action.payload.response?.token,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(signinStep1.fulfilled, (state, action) => ({
            ...state,
            photo: action.payload.photo,
            role: action.payload.role, //action.payload.response?.role,
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
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
        .addCase(tokenSignin.fulfilled, (state, action) => {
            const user = action.payload.response?.user || null;
            const token = action.payload.response?.token || null;
            return { ...state, user: user, token: token };
        })
        .addCase(userUpdate.fulfilled, (state, action) => {
            const user = action.payload.response?.user;
            const token = action.payload.response?.token;
            return {
                ...state,
                user: user || state.user,
                token: token || state.token,
                response: {
                    success: action.payload.success,
                    message: action.payload.message,
                    key: Date.now(),
                },
            };
        })
        .addCase(sendPasswordRecovery.fulfilled, (state, action) => ({
            ...state,
            response: {
                success: action.payload.success,
                message: action.payload.message,
                key: Date.now(),
            },
        }))
);
