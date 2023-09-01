import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const readActivities = createAsyncThunk("readActivities", async (id) => {
    return {
        activities: await axios(apiUrl + "/activities?itinerary_id=" + id)
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
