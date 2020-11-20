import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {IUserInfo} from '../../const/interface';
import http from '../../utils/http.client';
import { Cookies } from 'react-cookie';
import Axios from 'axios';

const cookies = new Cookies();
const _user = cookies.get("user"); 

const initialState: IUserInfo = _user || {
    id: 0,
    token: '',
    role: 0,
    menu: [],
    loginStatus: false,
    loading: false,
    message: ''
}
const client = http.internal
export const userLogin = createAsyncThunk('userLogin', 
  async (params:{id: number}, thunkApi) => {       
    const result = await client.get('Employee/FindEmployee', {
      params: {
        id: params.id
      }
    });        
  return result.data;
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {    
    updateUserInfo: (state, action) => {      
      state.loginStatus = action.payload;
      cookies.set("user", state);
    },    
  },
  extraReducers: {
    'userLogin/pending': (state, action) => {      
      state.loading = true;
    },
    'userLogin/fulfilled': (state, action) => {      
      // state.loginStatus = action.payload.status;      
      // state.token = action.payload.token;
      state.loading = false;
      state.token = action.payload.data.firstName;
      // cookies.set("user", state);
    },
    'userLogin/rejected': (state, action) => {
      state.loginStatus = false;
      state.loading = false;
      state.message = action.error.message;
    }
  }
});

export const { updateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
