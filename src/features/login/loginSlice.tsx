import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {IUserInfo} from '../../const/interface';
import http from '../../utils/http.client';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const _user = cookies.get("user"); 

const initialState: IUserInfo = _user || {
    id: 0,
    token: '',
    role: 0,
    menu: [],
    loginStatus: false,
    loading: false
}

const client = http.internal
export const userLogin = (account: string, pass: string) => 
  createAsyncThunk('userLogin', 
    async (_, {getState}) => {       
      const result = await client.post('login', {
        params : {
            username: account,
            password: pass,
        }
      });        
    return result.data.results;
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {    
    updateUserInfo: (state, action) => {      
      state.loginStatus = action.payload;
    },    
  },
  extraReducers: {
    'userLogin/pending': (state, action) => {      
      state.loading = true;
    },
    'userLogin/fulfilled': (state, action) => {      
      state.loginStatus = action.payload.status;      
      state.token = action.payload.token;
      state.loading = false;
      
    },
    'userLogin/rejected': (state, action) => {
      state.loginStatus = false;
      state.loading = false;
    }
  }
});

export const { updateUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
