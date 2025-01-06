import {createSlice} from '@reduxjs/toolkit'


// let storageUser = localStorage.getItem('user') !== null || undefined ? JSON.parse(localStorage.getItem('user')) : {};

export const UserSlice = createSlice({
    name:'user',
    initialState:{currentUser:{},},
    reducers:{
        login:(state,action)=>{
            state.currentUser = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        }
    }
})




export const userActions = UserSlice.actions