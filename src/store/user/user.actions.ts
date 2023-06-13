import { createAsyncThunk } from "@reduxjs/toolkit";
import IUser from './../../interface/user.interface';
import { AuthService } from './../../services/auth/auth.service';

export const register = createAsyncThunk<{message: string}, IUser>(
  'register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.register(JSON.stringify(data));
      return response;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
)

export const login = createAsyncThunk<IUser, IUser>(
  'register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.login(JSON.stringify(data));
      return response;
    } catch(e) {
      return thunkApi.rejectWithValue(e);
    }
  }
)