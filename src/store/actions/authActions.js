import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

async function fetchData(method, url, data, headers = {}) {
    const options = {
        method: method,
        headers: {
            ...headers,
            Authorization: `Bearer ${localStorage.token || null}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    return await fetch(import.meta.env.VITE_API_URL + url, options)
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            console.log(err);
            return err;
        });
}

export const auth = createAction("auth", (user) => ({ payload: user }));
export const signupStep1 = createAsyncThunk("signupStep1", (obj) => fetchData("POST", "/auth/signup/step1", obj));
export const signup = createAsyncThunk("signup", (obj) => fetchData("POST", "/auth/signup", obj));
export const signinStep1 = createAsyncThunk("signinStep1", (obj) => fetchData("POST", "/auth/signin/step1", obj));
export const signin = createAsyncThunk("signin", async (obj) => {
    const data = await fetchData("POST", "/auth/signin", obj);
    if (data.success) localStorage.token = data.response.token;
    return data;
});
export const tokenSignin = createAsyncThunk("tokenSignin", async () => {
    const data = await fetchData("POST", "/auth/token");
    data.success ? (localStorage.token = data.response.token) : localStorage.removeItem("token");
    return data;
});
export const signinGoogle = createAsyncThunk("signinGoogle", async (obj) => {
    const data = await fetchData("POST", "/auth/google", obj);
    if (data.success) localStorage.token = data.response.token;
    return data;
});
export const signout = createAsyncThunk("signout", async () => {
    const data = await fetchData("POST", "/auth/signout");
    localStorage.removeItem("token");
    return data;
});
export const userUpdate = createAsyncThunk("userUpdate", async (obj) => {
    const data = await fetchData("PUT", "/auth/userUpdate", obj);
    if (data.success) localStorage.token = data.response.token;
    return data;
});
export const sendPasswordRecovery = createAsyncThunk("sendPasswordRecovery", (obj) => fetchData("POST", "/auth/password-recovery", obj));
