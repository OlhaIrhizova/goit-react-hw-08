import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, refreshUser, registerThunk } from "./operations";



const initialState = {
    user: {
        name: '',
        email : ''
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>{
        builder
        .addCase(registerThunk.fulfilled,(state,action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
           
        } )
        .addCase(loginThunk.fulfilled,(state,action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        } )
        .addCase(logoutThunk.fulfilled,() =>{
            return initialState;
        } )
        .addCase(refreshUser.fulfilled, (state,action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
           

        })

        }
    }
)



export const authReducer = slice.reducer;