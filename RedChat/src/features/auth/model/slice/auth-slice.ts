 import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '../types/auth.types';
 import {createSlice} from '@reduxjs/toolkit'


// при загрузке приложения пытается взять токен из localStorage, чтобы сохранить сессию пользователя.

const initialState: AuthState ={   
    user: null,
    token: localStorage.getItem('token'), 
    isLoading: false,
    error: null,
};
const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        setCredentials: (
            state, 
            action: PayloadAction<{user: User; token: string}> 
        ) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token)
        },
        Logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
        setLoading: (state, action: PayloadAction<boolean>) =>{
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string> ) =>{
            state.error = action.payload
        }
    },
});


export const {
    setCredentials,
    Logout,
    setLoading,
    setError
} = authSlice.actions;

export default authSlice.reducer