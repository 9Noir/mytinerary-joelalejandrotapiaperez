import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

export const auth = createAction("auth", (user) => {
    return {
        payload: user, // El objeto de usuario que se envía al reducer
    };
});

export const signup = createAsyncThunk("signup", async (obj) => {
    try {
        const data = await axios.post(apiUrl + "/auth/signup", obj).then((res) => res.data);
        return data;
    } catch (error) {
        return error.response.data;
    }
});
export const signin = createAsyncThunk("signin", async (obj) => {
    try {
        const data = await axios.post(apiUrl + "/auth/signin", obj).then((res) => res.data);
        localStorage.token = data.response.token || null;
        return data;
    } catch (error) {
        return error.response.data;
    }
});
export const signout = createAsyncThunk("signout", async (obj) => {
    const authorization = { headers: { Authorization: `Bearer ${localStorage.token}` } };
    const data = await axios.post(apiUrl + "/auth/signout", null, authorization).then((res) => res.data);
    localStorage.removeItem("token");
    return data;
});
export const tokenSignin = createAsyncThunk("tokenSignin", async () => {
    const authorization = { headers: { Authorization: `Bearer ${localStorage.token}` } };
    const data = await axios.post(apiUrl + "/auth/token", null, authorization).then((res) => res.data.response);
    return data;
});
