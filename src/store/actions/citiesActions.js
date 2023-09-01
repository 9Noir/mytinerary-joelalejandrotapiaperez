import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

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
    return {
        cities: await fetchData(apiUrl + "/cities?" + query),
    };
});

export const readCarousel = createAsyncThunk("readCarousel", async () => {
    return await fetchData(apiUrl + "/cities?limit=12");
});

export const readCity = createAsyncThunk("readCity", async (city_id) => {
    return {
        city: await fetchData(apiUrl + "/cities/" + city_id),
    };
});
