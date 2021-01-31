import { loginRequest,logoutRequest} from "./admin";
import {getListGroupsRequest, updateGroupsRequest, removeGroupRequest} from "./groups"
import actionTypes from "../constants/actionTypes";
import {takeLatest} from "redux-saga/effects";


export function* loginRequestwatcher() {
    yield takeLatest (actionTypes.LOGIN_REQUEST, loginRequest);
};

export function* logoutRequestwatcher() {
    yield takeLatest (actionTypes.LOGOUT_REQUEST, logoutRequest);
};

export function* getListGroupsRequestwatcher() {
    yield takeLatest (actionTypes.GET_LIST_GROUPS_REQUEST, getListGroupsRequest);
}

export function* updateGroupsRequestwatcher() {
    yield takeLatest (actionTypes.UPDATE_GROUPS_REQUEST, updateGroupsRequest);
}

export function* removeGroupRequestwatcher() {
    yield takeLatest (actionTypes.REMOVE_GROUPS_REQUEST, removeGroupRequest);
}
