import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

// Define una acción de autenticación que recibe un usuario y lo envía al reducer
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
