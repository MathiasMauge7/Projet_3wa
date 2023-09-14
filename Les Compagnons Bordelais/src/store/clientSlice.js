import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    name: "test",
    lastname: "",
    mail: "",
    address: "",
    tel: "",
    photo: "",
  },

  reducers: {
    updateClientInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateClientInfo } = clientSlice.actions;
export default clientSlice.reducer;
