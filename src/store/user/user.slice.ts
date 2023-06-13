import IUser from './../../interface/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import { decodeToken } from './../../utils/token';

const initialState: {user: IUser | undefined, isLoading: boolean} = {
  user: decodeToken(),
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    
  }
})