import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
async function fetchData(url) {
    const authorization = { headers: { Authorization: `Bearer ${localStorage.token}` } };
    return await axios
        .get(import.meta.env.VITE_API_URL + url, authorization || null)
        .then((res) => res.data.response)
        .catch((err) => null);
}
export const clearUserData = createAction("clearUserData");
export const readUsers = createAsyncThunk("readUsers", async () => await fetchData("/users"));
export const readLikes = createAsyncThunk("readLikes", async (id) => await fetchData("/likes?user_id=" + id));
export const readComments = createAsyncThunk("readComments", async (id) => await fetchData("/comments?user_id=" + id));
export const readUserItineraries = createAsyncThunk("readUserItineraries", async (id) => await fetchData("/itineraries?creator=" + id));
