import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

export const readItineraries = createAsyncThunk("readItineraries", async (id) => {
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
export const readPopularItineraries = createAsyncThunk(
    "readPopularItineraries",
    async () =>
        await axios(apiUrl + "/itineraries/sorted-by-likes")
            .then((res) => {
                return res.data.response;
            })
            .catch((err) => {
                return null;
            })
);

export const toggleLike = createAsyncThunk("toggleLike", async (obj) => {
    const data = await axios
        .post(apiUrl + "/itineraries/toggle-like", obj)
        .then((res) => {
            return res.data.response;
        })
        .catch((err) => {
            return null;
        });
    return { _id: data._id, user_id: { _id: data.user_id }, itinerary_id: data.itinerary_id };
});
// export const toggleLike = createAction("toggleLike", (obj) => {
//     return { payload: { like: obj.like, itineraries: obj.itineraries } };
// });

export default readItineraries;

// export const createLike = createAsyncThunk("createLike", async (likeObj) => {
//     return {
//         like: await axios
//             .post(apiUrl + "/likes", likeObj)
//             .then((res) => {
//                 return res.data.response;
//             })
//             .catch((err) => {
//                 return null;
//             }),
//     };
// });
// export const deleteLike = createAsyncThunk("deleteLike", async (likeId) => {
//     return { payload: like };
// });

// export const deleteLike = createAction("deleteLike", (like) => {
//     return { payload: like };
// });
