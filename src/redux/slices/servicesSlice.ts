import { createSlice } from '@reduxjs/toolkit';

type serviceType = {
  id: number;
  vehicleId: number;
  nextServiceDate: Date;
  addedDate: Date;
  note: string;
};

type servicesListType = {
  services: Array<serviceType>;
};

const initialState: servicesListType = {
  services: [],
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (_, action) => {
      return action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
