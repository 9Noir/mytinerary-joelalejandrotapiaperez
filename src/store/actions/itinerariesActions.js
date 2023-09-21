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
    return await fetch(import.meta.env.VITE_API_URL + url, options)
        .then((res) => res.json())
        .then((res) => res.response)
        .catch((err) => {
            console.log(err);
            return null;
        });
}

export const readItineraries = createAsyncThunk("readItineraries", (id) => fetchData("GET", "/itineraries?city_id=" + id));
export const readPopularItineraries = createAsyncThunk("readPopularItineraries", () => fetchData("GET", "/itineraries/sorted-by-likes"));
export const toggleLike = createAsyncThunk("toggleLike", (obj) => fetchData("POST", "/itineraries/toggle-like", obj));
export const createItineraryComment = createAsyncThunk("createItineraryComment", (newComment) => fetchData("POST", `/itineraries/comments/${newComment.itinerary_id}/addcomment`, newComment));
export const deleteItineraryComment = createAsyncThunk("deleteComment", (obj) => fetchData("DELETE", `/itineraries/comments/${obj.itineraryId}/${obj.commentId}`));
export const updateItineraryComment = createAsyncThunk("updateComment", (comment) => fetchData("PUT", `/itineraries/comments/${comment.itinerary_id}/${comment._id}`, comment));

export default readItineraries;
