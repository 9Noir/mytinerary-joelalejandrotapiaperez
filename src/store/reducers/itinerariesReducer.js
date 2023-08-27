import { createReducer } from "@reduxjs/toolkit";
import readItineraries from "../actions/itinerariesActions";

const initialState = { itineraries: null };
const itinerariesReducer = createReducer(initialState, (builder) =>
    builder.addCase(readItineraries.fulfilled, (state, action) => {
        return {
            ...state,
            itineraries: action.payload.itineraries,
        };
    })
);

export default itinerariesReducer;
