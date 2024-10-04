import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clientId: null,
    name: "",
    lastname: "",
    mail: "",
    address: "",
    tel: "",
    photo: "",
    dogs: [
      {
        lastname: "",
        birthDate: null,
        breed: "",
        sex: "",
        microchip: "",
        tatoo: "",
        medical: "",
        img: "",
      },
    ],
  },

  reducers: {
    updateClientInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateClientId: (state, action) => {
      state.clientId = action.payload;
    },
    updateClientDogs: (state, action) => {
      state.dogs = action.payload; // Met à jour la propriété dogs
    },
  },
});

export const { updateClientInfo, updateClientId, updateClientDogs } =
  clientSlice.actions;
export default clientSlice.reducer;
