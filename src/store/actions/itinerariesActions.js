import { createAsyncThunk } from "@reduxjs/toolkit";
async function fetchData(method, url, data, headers = {}) {
    const options = {
        method: method,
        headers: {
            ...headers,
            Authorization: `Bearer ${localStorage.token || null}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    return await fetch(url, options)
        .then((res) => res.json())
        .then((res) => res.response)
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export const readItineraries = createAsyncThunk("readItineraries", async (id) => await fetchData("GET", import.meta.env.VITE_API_URL + "/itineraries?city_id=" + id));
export const readPopularItineraries = createAsyncThunk("readPopularItineraries", async () => await fetchData("GET", import.meta.env.VITE_API_URL + "/itineraries/sorted-by-likes"));

export const toggleLike = createAsyncThunk("toggleLike", async (obj) => {
    const itineraryUpdated = await fetchData("POST", import.meta.env.VITE_API_URL + "/itineraries/toggle-like", obj);
    return itineraryUpdated;
});

export const createItineraryComment = createAsyncThunk("createItineraryComment", async (newComment) => {
    const itineraryUpdated = await fetchData("POST", `${import.meta.env.VITE_API_URL}/itineraries/comments/${newComment.itinerary_id}/addcomment`, newComment);
    return itineraryUpdated;
});

export const deleteItineraryComment = createAsyncThunk("deleteComment", async (obj) => {
    const itineraryUpdated = await fetchData("DELETE", `${import.meta.env.VITE_API_URL}/itineraries/comments/${obj.itineraryId}/${obj.commentId}`);
    return itineraryUpdated;
});

export const updateItineraryComment = createAsyncThunk("updateComment", async (comment) => {
    const itineraryUpdated = await fetchData("PUT", `${import.meta.env.VITE_API_URL}/itineraries/comments/${comment.itinerary_id}/${comment._id}`, comment);
    return itineraryUpdated;
});

export default readItineraries;
