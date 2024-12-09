import {userActions} from '../userStore/user'



export const loginUser = (data)=>{
    return (dispatch)=>{

        dispatch(userActions.login(data))
    }
}