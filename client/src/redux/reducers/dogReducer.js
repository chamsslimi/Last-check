import { Edit_DOG, GET_DOGS, GET_USERDOGS } from "../types";

const initialState = {
    dogs:[],
    dog:null,
    loading:true
};

function dogReducer (state = initialState, {type,payload }) {
  switch (type) {
    case GET_DOGS:
        return{
            ...state,dogs:payload,loading:false
        }
    case GET_USERDOGS:
            return{
                ...state,dogs:payload,loading:false
            }    
    case Edit_DOG:
            return{
            ...state,dogs:payload
            }   
        
  
    default:
        return state;
  }
    
  }
export default dogReducer;
