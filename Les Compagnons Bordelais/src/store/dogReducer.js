import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastname: "Pablo",
    birthDate: "21/11/2019",
    age: "annee naissance - annee actuel",
    sex: "Mâle",
    breed: "Samoyède",
    microchip: "Oui",
    tatoo: "Non",
    medical: "Non",
};

const dogReducer = createSlice({
    name: 'client',
    initialState,
    reducers: {
        updateClientDogInfo: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { updateClientDogInfo } = dogReducer.actions;
export default dogReducer.reducer