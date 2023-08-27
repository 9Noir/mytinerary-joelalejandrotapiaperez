import { createReducer } from "@reduxjs/toolkit";
import readItineraries from "../actions/itinerariesActions";

const initialState = { activities: null };
const activitiesReducer = createReducer(initialState, (builder) =>
    builder.addCase(readItineraries.fulfilled, (state, action) => {
        return {
            ...state,
            activities: action.payload.itineraries,
        };
    })
);

export default activitiesReducer;