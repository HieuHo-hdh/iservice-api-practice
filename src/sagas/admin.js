import {call, put} from "redux-saga/effects";
import * as api from "../api/api";
import * as actions from "../actions/admin";

export function* loginRequest({payload})
{
    try {
        let result = yield call(api.login, {
          username: payload.username,
          password: payload.password,
        });
        console.log(result);
        if (result.data.result) {
          yield put(
            actions.loginSuccess({
              user: result.data.data,
            })
          );
        }
    } 
    catch (error)
    {
      console.log(error.message);
      yield put(actions.errorHandle(error.message));
    }
}

export function* logoutRequest({ payload }) {
  try {
    let result = yield call(api.logout, { token: payload.token });

    if (result.data.result) {
      
    }
  } 
  catch (error) 
  {
    console.log(error.message);
  }
   
  finally {
    yield put(actions.logoutSuccess());
  }
}
