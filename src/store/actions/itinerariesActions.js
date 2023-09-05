import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../apiUrl";

async function fetchData(method, url, data, headers = {}) {
    const options = {
        method: method,
        headers: {
            ...headers,
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

export const readItineraries = createAsyncThunk("readItineraries", async (id) => {
    return {
        itineraries: await fetchData("GET", apiUrl + "/itineraries?city_id=" + id),
    };
});
export const readPopularItineraries = createAsyncThunk("readPopularItineraries", async () => await fetchData("GET", apiUrl + "/itineraries/sorted-by-likes"));

export const toggleLike = createAsyncThunk("toggleLike", async (obj) => {
    const data = await fetchData("POST", apiUrl + "/itineraries/toggle-like", obj);
    return { _id: data._id, user_id: { _id: data.user_id }, itinerary_id: data.itinerary_id };
});

export const createItineraryComment = createAsyncThunk("createItineraryComment", async (obj) => {
    const newComment = await fetchData("POST", apiUrl + "/comments", obj.comment);
    const updatedComments = obj.comments.map((comment) => comment._id);
    updatedComments.push(newComment._id);
    const updatedItinerary = await fetchData("PUT", apiUrl + "/itineraries/" + obj.comment.itinerary_id, { comments: updatedComments });
    const updatedCommentsObj = [...obj.comments, { ...newComment, user_id: obj.user }];
    return { id: updatedItinerary._id, comments: updatedCommentsObj };
});

export const deleteItineraryComment = createAsyncThunk("deleteComment", async (obj) => {
    const itineraryUpdated = await fetchData("DELETE", `${apiUrl}/itineraries/${obj.itineraryId}/${obj.commentId}`);
    return itineraryUpdated;
});

export const updateItineraryComment = createAsyncThunk("updateComment", async (obj) => {
    console.log(obj);
    const itineraryUpdated = await fetchData("PUT", `${apiUrl}/itineraries/${obj.comment.itinerary_id}/${obj.comment._id}`, obj.newContent);
    return itineraryUpdated;
});

export default readItineraries;
