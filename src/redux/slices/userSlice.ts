import { createSlice } from '@reduxjs/toolkit';

type userDetailsType = {
  id: number;
  name: string;
  email: string;
  currency: string;
  unit: string;
  imageId: imageId;
};

enum imageId {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const initialState: userDetailsType = {
  id: 0,
  name: 'Guest',
  email: '',
  currency: '',
  unit: '',
  imageId: imageId.Down,
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
