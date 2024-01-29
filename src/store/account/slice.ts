import {createSlice} from '@reduxjs/toolkit';
import {login} from './actions';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export interface AccountState {
  token: string;
  isLogin: boolean;
  user_profile: any;
}

const initialState: AccountState = {
  token: '',
  isLogin: false,
  user_profile: null,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    logout: state => {
      state.isLogin = false;
      state.token = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.data.token;
      state.isLogin = true;
      storage.set('token', action.payload.data.token);
      return state;
    });
  },
});

export const {logout, setToken} = accountSlice.actions;
