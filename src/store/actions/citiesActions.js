import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Acción asincrónica para leer ciudades desde la API
async function fetchData(url) {
    return axios
        .get(url)
        .then((res) => res.data.response)
        .catch((err) => {
            console.log(err);
            return null;
        });
    // .catch((err) => {
    //     throw err;
    // }),
}
export const readCities = createAsyncThunk("readCities", async (query = "") => {
    console.log(import.meta.env.VITE_API_URL)
    return {
        cities: await fetchData(import.meta.env.VITE_API_URL + "/cities?" + query),
    };
});

export const readCarousel = createAsyncThunk("readCarousel", async () => {
    return await fetchData(import.meta.env.VITE_API_URL + "/cities?limit=12");
});

export const readCity = createAsyncThunk("readCity", async (city_id) => {
    return {
        city: await fetchData(import.meta.env.VITE_API_URL + "/cities/" + city_id),
    };
});
