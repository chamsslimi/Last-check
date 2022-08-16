import { ALL_USERS } from "../types";

const initialState = {
    users:[],
    user:null,
    loading:true
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_USERS:
        
        return{
            ...state,users:payload,loading:false
        }

  default:
    return state ;
  }}

