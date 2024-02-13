import { createSlice } from '@reduxjs/toolkit';

export type fuelEntryType = {
  id: number;
  type: string;
  amount: number;
  quantity: number;
  date: string;
  time: string;
};

type fuelLedgerType = {
  ledgerList: Array<fuelEntryType>;
};

const initialState: fuelLedgerType = {
  ledgerList: [],
};

export const fuelLedgerSlice = createSlice({
  name: 'fuelLedger',
  initialState,
  reducers: {
    addFuelEntry: (state, action) => {
      state.ledgerList = [...state.ledgerList, action.payload];
    },
  },
});

export const { addFuelEntry } = fuelLedgerSlice.actions;

export default fuelLedgerSlice.reducer;
