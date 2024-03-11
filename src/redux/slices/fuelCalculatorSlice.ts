import { createSlice } from '@reduxjs/toolkit';

type fuelCalculatorType = {
  lastCalculated: number;
  lastDate: string;
  lastCurrency: string;
};

const initialState: fuelCalculatorType = {
  lastCalculated: 0,
  lastDate: '',
  lastCurrency: '',
};

export const fuelCalculatorSlice = createSlice({
  name: 'fuelCalculator',
  initialState,
  reducers: {
    setFuelCalculator: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFuelCalculator } = fuelCalculatorSlice.actions;

export default fuelCalculatorSlice.reducer;
