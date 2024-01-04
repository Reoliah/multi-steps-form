import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "USERDATA",
  initialState: {
    selectPlan: {},
    addOns: [],
    finishingUp: {},
  },
  reducers: {
    updatePlanChoice: (state, action) => {
      state.selectPlan = action.payload;
    },
    selectedAddOns: (state, action) => {
      return { ...state, addOns: [...state.addOns, action.payload] };
    },
    clearAddOns: (state) => {
      state.addOns = [];
    },

    updateFinishing: (state, action) => {
      state.finishingUp = action.payload;
    },
  },
});

export const {
  updatePlanChoice,
  selectedAddOns,
  clearAddOns,
  updateFinishing,
} = dataSlice.actions;

export default dataSlice.reducer;
