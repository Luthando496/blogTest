import {configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './userStore/user'



export const store = configureStore({
    
    reducer:{user:UserSlice.reducer}
})