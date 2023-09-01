import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

export const readUsers = createAsyncThunk("readUsers", async () => {
    return await axios
        .get(apiUrl + "/users")
        .then((res) => res.data.response)
        .catch((err) => null);
});
