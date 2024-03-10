import { createSlice } from '@reduxjs/toolkit';

type userDetailsType = {
  id: number;
  name: string;
  email: string;
  currency: string;
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
  currency: '',
  unit: '',
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
  },
});

export const { setUserDetails, setProfilePicture } = userSlice.actions;

export default userSlice.reducer;
