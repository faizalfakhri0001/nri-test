import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {MMKV} from 'react-native-mmkv';
import { productService } from 'services';
import { Product } from 'types/entities';

const storage = new MMKV();
const user_token = storage.getString('token');

export const login = createAsyncThunk(
  'account/login',
  async (data: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${''}/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


export const getProducts = createAsyncThunk<
  Product[],
  never,
  {
    rejectValue: any
  }
>(
  'account/products',
  async (_, {rejectWithValue}) => {
    try {
      const products = await productService.getAll();
      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
