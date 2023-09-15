import { createReducer } from "@reduxjs/toolkit";
import { readCarousel, readCities, readCity } from "../actions/citiesActions";

const initialState = { carousel: null, cities: null, city: null };
const citiesReducer = createReducer(
    initialState,
    (builder) =>
        builder
            .addCase(
                readCities.fulfilled, 
                (state, action) => {
                    let newState = {
                        ...state,
                        cities: action.payload.cities,
                    };
                    return newState;
                }
            )

            .addCase(readCarousel.fulfilled, (state, action) => {
                return { ...state, carousel: action.payload };
            })
            .addCase(readCity.fulfilled, (state, action) => {
                let newState = {
                    ...state,
                    city: action.payload.city,
                };
                return newState;
            })
);

export default citiesReducer;
