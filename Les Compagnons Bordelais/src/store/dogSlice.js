import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const dogSlice = createSlice({
  name: "dog",
  initialState: {
    lastname: "",
    birthDate: moment().format("DD-MM-YYYY"),
    breed: "",
    sex: "",
    tatoo: "",
    microchip: "",
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
