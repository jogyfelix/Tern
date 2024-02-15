import { createSlice } from '@reduxjs/toolkit';

type vehiclesType = {
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
    setVehicle: (_, action) => {
      return action.payload;
    },
  },
});

export const { setVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
