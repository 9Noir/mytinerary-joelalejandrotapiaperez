import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const readActivities = createAsyncThunk("readActivities", async (id) => {
    return {
        itineraries: await axios(apiUrl + "/activities?itinerary_id=" + id)
            .then((res) => {
                return res.data.response;
            })
            .catch((err) => {
                return null;
            }),
    };
});

export default readActivities;
