import { createReducer } from "@reduxjs/toolkit";
import { readCarousel, readCities, readCity } from "../actions/citiesActions";

// Estado inicial
const initialState = { carousel: null, cities: null, city: null };

// Reducer utilizando createReducer de Redux Toolkit
const citiesReducer = createReducer(
    initialState, //estado incial
    (builder) =>
        builder
            .addCase(
                //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
                readCities.fulfilled, //accion a reducir
                // Acción para manejar cuando la llamada asincrónica es exitosa
                (state, action) => {
                    // Callback que depende del estado y la accion y es la encargada de reducir los estados
                    // Actualiza el estado con los datos obtenidos de la acción
                    let newState = {
                        ...state, //a la copia del estado tengo que "llenarle" la propiedad cities con los datos que me envía la accion
                        cities: action.payload.cities,
                    };
                    return newState; //retorno el nuevo estado para que se actualice la vista
                }
            )
            // .addCase(readCities.rejected, (state, action) => {
            //     console.log("REJECTED")
            //     return { ...state, cities: [] };
            // })
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
