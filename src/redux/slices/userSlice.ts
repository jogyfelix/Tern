import { createSlice } from '@reduxjs/toolkit';

export const currencies = [
  { name: 'United States Dollar', code: 'USD', symbol: '$' },
  { name: 'Euro', code: 'EUR', symbol: '€' },
  { name: 'British Pound Sterling', code: 'GBP', symbol: '£' },
  { name: 'Japanese Yen', code: 'JPY', symbol: '¥' },
  { name: 'Canadian Dollar', code: 'CAD', symbol: '$' },
  { name: 'Australian Dollar', code: 'AUD', symbol: '$' },
  { name: 'Swiss Franc', code: 'CHF', symbol: 'CHF' },
  { name: 'Chinese Yuan', code: 'CNY', symbol: '¥' },
  { name: 'Indian Rupee', code: 'INR', symbol: '₹' },
  { name: 'Brazilian Real', code: 'BRL', symbol: 'R$' },
  { name: 'Russian Ruble', code: 'RUB', symbol: '₽' },
  { name: 'South Korean Won', code: 'KRW', symbol: '₩' },
  { name: 'Mexican Peso', code: 'MXN', symbol: '$' },
  { name: 'South African Rand', code: 'ZAR', symbol: 'R' },
  { name: 'Turkish Lira', code: 'TRY', symbol: '₺' },
  { name: 'New Zealand Dollar', code: 'NZD', symbol: '$' },
  { name: 'Singapore Dollar', code: 'SGD', symbol: '$' },
  { name: 'Hong Kong Dollar', code: 'HKD', symbol: '$' },
];

export const unit = ['Miles', 'Kilometer'];
export type currencyType = { name: string; code: string; symbol: string };

type userDetailsType = {
  id: number;
  name: string;
  email: string;
  currency: currencyType;
  unit: string;
  imageId: imageId;
};

export enum imageId {
  User1 = 'User1',
  User2 = 'User2',
  User3 = 'User3',
  User4 = 'User4',
}

const initialState: userDetailsType = {
  id: 0,
  name: 'Guest',
  email: '',
  currency: currencies[8],
  unit: unit[1],
  imageId: imageId.User1,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (_, action) => {
      return action.payload;
    },
    setProfilePicture: (state, action) => {
      state.imageId = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setUserDetails, setProfilePicture, setUserName, setCurrency, setUnit } =
  userSlice.actions;

export default userSlice.reducer;
