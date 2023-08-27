import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const readItineraries = createAsyncThunk("readItineraries", async (id) => {
    return {
        itineraries: await axios(apiUrl + "/itineraries?city_id=" + id)
            .then((res) => {
                return res.data.response;
            })
            .catch((err) => {
                return null;
            }),
    };
});

export default readItineraries;
