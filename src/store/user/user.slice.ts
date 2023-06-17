import IUser from './../../interface/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import { decodeToken } from './../../utils/token';
import { login } from './user.actions';

const initialState: {user: IUser | undefined, isLoading: boolean} = {
  user: decodeToken(),
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state =>{
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
  }
})