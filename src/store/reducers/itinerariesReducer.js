import { createReducer } from "@reduxjs/toolkit";
import { createItineraryComment, deleteItineraryComment, readItineraries, readPopularItineraries, toggleLike, updateItineraryComment } from "../actions/itinerariesActions";

const initialState = { itineraries: null, popular: null }; // Array de itinerarios
const itinerariesReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(readItineraries.fulfilled, (state, action) => {
            state.itineraries = action.payload.itineraries;
        }) // {
        //     return {
        //         ...state,
        //         itineraries: action.payload.itineraries,
        //     };
        // })
        .addCase(readPopularItineraries.fulfilled, (state, action) => {
            state.popular = action.payload;
        })
        .addCase(toggleLike.fulfilled, (state, action) => {
            const like = action.payload;
            // Encuentra el itinerario que necesita ser actualizado
            const itineraryToUpdate = state.itineraries.find((each) => each._id == like.itinerary_id);

            if (itineraryToUpdate) {
                // Verifica si el likeId ya existe en el itinerario
                const likeIndex = itineraryToUpdate.likes.findIndex((each) => each._id === like._id);
                if (likeIndex === -1) {
                    // El likeId no existe, agrégalo al array de likes
                    itineraryToUpdate.likes.push(like);
                } else {
                    // El likeId ya existe, elimínalo del array de likes
                    itineraryToUpdate.likes.splice(likeIndex, 1);
                }

                // Actualiza el estado con el itinerario actualizado
                state.itineraries = state.itineraries.map((each) => (each._id === like.itinerary_id ? itineraryToUpdate : each));
            }
        })
        .addCase(createItineraryComment.fulfilled, (state, action) => {
            const { id, comments } = action.payload;
            console.log(action.payload);
            state.itineraries = state.itineraries.map((each) => (each._id === id ? { ...each, comments: comments } : each));
        })
        .addCase(deleteItineraryComment.fulfilled, updateItineraryComments)
        .addCase(updateItineraryComment.fulfilled, updateItineraryComments)
);

function updateItineraryComments(state, action) {
    const { _id, comments } = action.payload;
    state.itineraries = state.itineraries.map((each) => (each._id === _id ? { ...each, comments } : each));
}

export default itinerariesReducer;

// .addCase(toggleLike, (state, action) => {
//     const { like } = action.payload;

//     // Encuentra el itinerario que necesita ser actualizado
//     const itineraryToUpdate = state.itineraries.find((each) => each._id === like.itinerary);
//     if (itineraryToUpdate) {
//         // Verifica si el likeId ya existe en el itinerario
//         const likeIndex = itineraryToUpdate.likes.findIndex(each=>each._id==like._id)
//         if (likeIndex === -1) {
//             // El likeId no existe, agrégalo al array de likes
//             itineraryToUpdate.likes.push({ ...like, _id: Math.floor(Math.random() * 1000) + "" });
//         } else {
//             // El likeId ya existe, elimínalo del array de likes
//             itineraryToUpdate.likes.splice(likeIndex, 1);
//         }

//         // Actualiza el estado con el itinerario actualizado
//         state.itineraries = state.itineraries.map((each) => (each._id === like.itinerary ? itineraryToUpdate : each));
//     }
// })
