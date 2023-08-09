import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Maugé",
    lastname: "Mathias",
    mail: "mathias.mauge@hotmail.fr",
    address: "30 rue de bigeau 33290 parempuyre",
    tel: "06 66 50 84 07",
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        updateClientInfo: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { updateClientInfo } = clientSlice.actions;
export default clientSlice.reducer