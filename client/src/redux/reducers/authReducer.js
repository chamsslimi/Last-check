import { CURRENT, EDIT_PROFILE, FAIL, LOGIN, LOGOUT, REGISTER } from "../types";

const initialState = {
    auth:false,
    user:null,
    loading:true,
    
}

 const authReducer=(state = initialState, { type, payload }) => {
 switch (type) {
    case REGISTER:
    case LOGIN:    
        localStorage.setItem('token',payload.token)
return {
    ...state,user:payload.user,auth:true,loading:false
}
    case LOGOUT:
    localStorage.removeItem('token');
    return{
        ...state,user:null,auth:false,loading:false
    };
    case CURRENT:
        return {
            ...state,user:payload,auth:true,loading:false
        }
    case FAIL:
        localStorage.removeItem('token')
        return{
            ...state,user:null,auth:false,loading:false
        }
    case EDIT_PROFILE:
            return{
            ...state,user:payload
            }       
       default:
        return state;
 }

  
}
export default authReducer;