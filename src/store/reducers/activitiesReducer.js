import { createReducer } from "@reduxjs/toolkit";
import readActivities from "../actions/activitiesActions";

const initialState = {};
const activitiesReducer = createReducer(initialState, (builder) =>
    builder.addCase(readActivities.fulfilled, (state, action) => {
        return {
            ...state,
            [action.payload.itinerary_id]: action.payload.activities,
        };
    })
);

export default activitiesReducer;
