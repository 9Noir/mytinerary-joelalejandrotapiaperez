import { createReducer } from "@reduxjs/toolkit";
import { createItineraryComment, deleteItineraryComment, readItineraries, readPopularItineraries, toggleLike, updateItineraryComment } from "../actions/itinerariesActions";

const initialState = { itineraries: null, popular: null }; // Array de itinerarios
const itinerariesReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(readItineraries.fulfilled, (state, action) => {
            state.itineraries = action.payload.itineraries;
            // action.payload.itineraries.foreach((it) => (state.itineraries[it._id] = it));
        })
        .addCase(readPopularItineraries.fulfilled, (state, action) => {
            state.popular = action.payload;
        })
        .addCase(toggleLike.fulfilled, (state, action) => {
            const { _id, likes } = action.payload;
            state.itineraries = state.itineraries.map((each) => (each._id === _id ? { ...each, likes } : each));
        })
        .addCase(createItineraryComment.fulfilled, updateItineraryComments)
        .addCase(deleteItineraryComment.fulfilled, updateItineraryComments)
        .addCase(updateItineraryComment.fulfilled, updateItineraryComments)
);

function updateItineraryComments(state, action) {
    const { _id, comments } = action.payload;
    state.itineraries = state.itineraries.map((each) => (each._id === _id ? { ...each, comments } : each));
}

export default itinerariesReducer;
