import { name } from '@cloudinary/url-gen/actions/namedTransformation'
import {createSlice} from '@reduxjs/toolkit'


export const UserSlice = createSlice({
    name:'user',
    initialState:{currentUser:null,},
    reducers:{
        login:(state,action)=>{
            state.currentUser = action.payload
        }
    }
})




export const userActions = UserSlice.actions