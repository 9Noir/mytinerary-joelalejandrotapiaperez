import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import itinerariesReducer from "./reducers/itinerariesReducer";
import activitiesReducer from "./reducers/activitiesReducer";

// Configuración del store utilizando Redux Toolkit
export default configureStore({
    reducer: {
        cities: citiesReducer, // Reducer para manejar el estado de las ciudades
        itineraries: itinerariesReducer,
        activities: activitiesReducer,
    },
});
