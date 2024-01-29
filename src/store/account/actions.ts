import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();
const user_token = storage.getString('token');

export const login = createAsyncThunk(
  'membership/login',
  async (data: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${''}/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
