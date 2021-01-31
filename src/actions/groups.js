import actionTypes from "../constants/actionTypes";

export const getListGroupsRequest = ({token, page, pageSize}) =>
({
    type:actionTypes.GET_LIST_GROUPS_REQUEST,
    payload: {
        token, 
        page, 
        pageSize,
    }
})
//
export const getListGroupsSuccess = ({items, notice}) =>
({
    type:actionTypes.GET_LIST_GROUPS_SUCCESS,
    payload: {
        items,
        notice
    }
})



export const updateGroupsRequest = ({token, page, pageSize, description, id, name, permissions,}) =>
({
    type:actionTypes.UPDATE_GROUPS_REQUEST,
    payload: {
        token, 
        page, 
        pageSize,
        description,
        name,
        id,
        permissions,
    }
})

export const removeGroupRequest = ({ token, page, pageSize, id }) => ({
    type: actionTypes.REMOVE_GROUPS_REQUEST,
    payload: {
      token,
      page,
      pageSize,
      id,
    },
});
  

export const handleGroupsError = ({ error }) => 
({
    type:actionTypes.ERROR_GROUPS_HANDLE,
    payload: {
      error,
    },
});