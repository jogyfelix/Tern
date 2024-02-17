import { createSlice } from '@reduxjs/toolkit';

export type vehiclesType = {
  id: number;
  type: string;
  name: string;
  make: string;
  note: string;
};

type vehiclesListType = {
  vehiclesList: Array<vehiclesType>;
};

const initialState: vehiclesListType = {
  vehiclesList: [],
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    addVehicle: (state, action) => {
      state.vehiclesList = [...state.vehiclesList, action.payload];
    },
  },
});

export const { addVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
