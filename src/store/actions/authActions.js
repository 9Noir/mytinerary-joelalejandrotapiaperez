import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

export const auth = createAction("auth", (user) => {
    return {
        payload: user, // El objeto de usuario que se envía al reducer
    };
});
export const readLikes = createAsyncThunk(
    "readLikes",
    async (id) =>
        await axios
            .get(apiUrl + "/likes?user_id=" + id)
            .then((res) => res.data.response)
            .catch((err) => null)
);
export const signup = createAsyncThunk("signup", async (obj) => {
    const data = await axios.post(apiUrl + "/auth/signup", obj).then((res) => res.data.response);
    return data;
});
export const signin = createAsyncThunk("signin", async (obj) => {
    const data = await axios.post(apiUrl + "/auth/signin", obj).then((res) => res.data.response);
    localStorage.token = data.token;
    return data;
});
export const signout = createAsyncThunk("signout", async (obj) => {
    const authorization = { headers: { Authorization: `Bearer ${localStorage.token}` } };
    await axios.post(apiUrl + "/auth/signout", null, authorization);
    localStorage.removeItem("token");
    return null;
});
export const tokenSignin = createAsyncThunk("tokenSignin", async () => {
    const authorization = { headers: { Authorization: `Bearer ${localStorage.token}` } };
    const data = await axios.post(apiUrl + "/auth/token", null, authorization).then((res) => res.data.response);
    return data;
});
