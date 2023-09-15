import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clientId: null,
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
    updateClientId: (state, action) => {
      state.clientId = action.payload;
    },
  },
});

export const { updateClientInfo, updateClientId } = clientSlice.actions;
export default clientSlice.reducer;
