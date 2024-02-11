import { createSlice } from '@reduxjs/toolkit';

type userDetailsType = {
  id: number;
  name: string;
  email: string;
  currency: string;
  unit: string;
};

const initialState: userDetailsType = {
  id: 0,
  name: '',
  email: '',
  currency: '',
  unit: '',
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (_, action) => {
      return action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
