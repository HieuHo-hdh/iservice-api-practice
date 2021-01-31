import actionTypes from "../constants/actionTypes";
import {INITIAL_GROUPS_STATE} from "./initialStates";

const groupsReducer = (state = INITIAL_GROUPS_STATE, action) => {
    switch(action.type){
        case actionTypes.GET_LIST_GROUPS_REQUEST:{
            return{
            ...state,
            isLoading: true,
            }
        }
        case actionTypes.GET_LIST_GROUPS_SUCCESS:{
            return{
            ...state,
            items: action.payload.items,
            error: action.payload.notice,
            isLoading: false,
            }
        }
        case actionTypes.UPDATE_GROUPS_REQUEST: {
          return {
            ...state,
            isLoading: true,
          };
        }
        case actionTypes.REMOVE_GROUPS_REQUEST: {
          return {
            ...state,
            isLoading: true,
          };
        }
        case actionTypes.ERROR_GROUPS_HANDLE: {
          return {
            ...state,
            error: action.payload.error,
            isLoading: false,
          };
        }
          
        default: 
        {
          return { ...state };
        }
      }
    };
export default groupsReducer;