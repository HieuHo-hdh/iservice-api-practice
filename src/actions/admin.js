import actionTypes from "../constants/actionTypes";

export const loginRequest = ({username, password}) =>
({
    type:actionTypes.LOGIN_REQUEST,
    payload: {
        username, 
        password,
    }
});

export const loginSuccess = ({user}) =>
({
    type:actionTypes.LOGIN_SUCCESS,
    payload: {
        user,
    }
});

export const errorHandle = ({err}) =>
({
    type:actionTypes.ERROR_HANDLE,
    payload: { 
        error: err 
    },
})

export const logoutRequest = ({ token }) => 
({
    type: actionTypes.LOGOUT_REQUEST,
    payload: {
      token,
    },
  });

export const logoutSuccess = () => 
({ 
    type: actionTypes.LOGOUT_SUCCESS 
});
