import actionTypes from "../constants/actionTypes";
import {INITIAL_STATE} from "./initialStates";
import * as cookies from "../utils/cookies";

const adminReducer = (state = INITIAL_STATE, action) =>
{
    switch (action.type)
    {
      case actionTypes.LOGIN_REQUEST:{
        return{
            ...state,
            isLoading: true,    
        }
      }

      case actionTypes.LOGIN_SUCCESS:{
        //Set cookie(name,value,days) here until user logout
        cookies.setCookie("session_id", action.payload.user.token, 1);
            return{
                ...state,
                isAuthUser: action.payload.user.token,
                isLoading: false,

            }
       }
        
      case actionTypes.ERROR_HANDLE:{
        return{
          ...state,
          isLoading: false,
          error: action.payload.error,
        }
      }
      // case actionTypes.LOGOUT_REQUEST: {
      //   return {
      //     ...state,
      //             error: action.payload.error,
      //     isLoading: false,
      //   };
      // }

      case actionTypes.LOGOUT_SUCCESS: {
        return {
          ...state,
          isAuthUser: false,
        };
      }

      default: 
        return {...state};
    }
}

export default adminReducer;

