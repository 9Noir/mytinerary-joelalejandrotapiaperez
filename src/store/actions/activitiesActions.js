import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const readActivities = createAsyncThunk("readActivities", async (id) => {
    return {
        activities: await axios(import.meta.env.VITE_API_URL + "/activities?itinerary_id=" + id)
            .then((res) => {
                return res.data.response;
            })
            .catch((err) => {
                return null;
            }),
        itinerary_id: id,
    };
});

export default readActivities;
