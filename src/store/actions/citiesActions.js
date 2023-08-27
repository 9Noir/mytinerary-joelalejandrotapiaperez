import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

// Acción asincrónica para leer ciudades desde la API
export const readCities = createAsyncThunk(
    "readCities", // Nombre de la acción
    async (query = "") => {
        // Callback, realiza una petición a la API para obtener las ciudades
        return {
            cities: await axios(apiUrl + "/cities?" + query)
                .then((res) => {
                    return res.data.response;
                })
                .catch((err) => {
                    // console.log(err);
                    return null;
                }),
            // .catch((err) => {
            //     throw err;
            // }),
        };
    }
);

export const readCity = createAsyncThunk("readCity", async (city_id) => {
    return {
        city: await axios(apiUrl + "/cities/" + city_id)
            .then((res) => {
                return res.data.response;
            })
            .catch((err) => {
                console.log(err);
                return null;
            }),
    };
});