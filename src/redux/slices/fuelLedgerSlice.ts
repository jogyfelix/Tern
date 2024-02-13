import { createSlice } from '@reduxjs/toolkit';

type fuelEntryType = {
  id: number;
  type: string;
  amount: number;
  quantity: number;
  date: Date;
  time: Date;
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
    setFuelLedgerDetails: (_, action) => {
      return action.payload;
    },
  },
});

export const { setFuelLedgerDetails } = fuelLedgerSlice.actions;

export default fuelLedgerSlice.reducer;
