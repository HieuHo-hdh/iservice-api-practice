import { put, call } from "redux-saga/effects";
import * as api from "../api/api";
import * as actions from "../actions/groups";


export function* getListGroupsRequest({ payload }) {
    try {
      let result = yield call(api.getlistGroups, {
        token: payload.token,
        page: payload.page,
        pageSize: payload.pageSize,
      });
      if (result.data.data?.data) 
      {
        yield put(actions.getListGroupsSuccess({ items: result.data.data.data }));
      }
    } 
    catch (error) {
      yield put(actions.handleGroupsError({ error: error.message }));
    }
}

export function* updateGroupsRequest({ payload }) {
  try {
          let result = yield call(api.updateGroups, {
              description: payload.description,
              id: payload.id,
              name: payload.name,
              permissions: payload.permissions,
              token: payload.token,
          });

          if (result.data.result) 
          {
              let result = yield call(api.getlistGroups, {
              token: payload.token,
              page: 0,
              pageSize: payload.pageSize,
              });
              //show listgroup afterwards
              if (result.data.data?.data) {
              yield put(
                  actions.getListGroupsSuccess({
                  items: result.data.data.data,
                  notice: "Edit successfully",
                  })
              );
              }
          }
      } catch (error) {
          yield put(actions.handleGroupsError({ error: error.message }));
      }
}

export function* removeGroupRequest({ payload }) {
  //Delete
  try {
    let result = yield call(api.removeGroup, {
      id: payload.id,
      token: payload.token,
    });
    if (result.data.result) {
      let result = yield call(api.getlistGroups, {
        token: payload.token,
        //page: payload.page,
        page: 0,
        pageSize: payload.pageSize,
      });
      //show listgroup afterwards
      if (result.data.data?.data) {
        yield put(
          actions.getListGroupsSuccess({
            items: result.data.data.data,
            notice: "success_removed",
          })
        );
      } else {
        throw new Error(result.data.message);
      }
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    yield put(actions.handleGroupsError({ error: error.message }));
  }
}  
  