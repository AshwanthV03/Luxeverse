import{publicRequest} from "../requestMeathods"
import {loginFailure,loginStart,loginSuccess} from './userRedux'

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/user/login",user)
        console.log(user)
        console.log(res.data)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}