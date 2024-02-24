import { createSlice } from '@reduxjs/toolkit';

export type serviceType = {
  id: number;
  vehicleId: number;
  vehicleName: string;
  service: string;
  odometer: string;
  status: 'upcoming' | 'complete';
  nextServiceDate: string;
  nextServiceTime: string;
  addedDate: string;
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
    addService: (state, action) => {
      state.services = [...state.services, action.payload];
    },
  },
});

export const { addService } = servicesSlice.actions;

export default servicesSlice.reducer;
