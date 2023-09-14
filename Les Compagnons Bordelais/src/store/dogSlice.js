import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
  name: "dog",
  initialState: {
    lastname: "test",
    birthDate: "2023-02-15",
    breed: "",
    sex: "Male",
    tatoo: "Non",
    microchip: "Oui",
    medical: "",
    img: "",
  },
  reducers: {
    updateDogInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateDogInfo } = dogSlice.actions;
export default dogSlice.reducer;
