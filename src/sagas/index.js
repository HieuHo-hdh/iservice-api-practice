import {fork} from "redux-saga/effects";
import {loginRequestwatcher,logoutRequestwatcher, updateGroupsRequestwatcher, getListGroupsRequestwatcher, removeGroupRequestwatcher } from "./watcher";

export default function* startForman()
{
    yield fork(loginRequestwatcher);
    yield fork(logoutRequestwatcher);
    yield fork(getListGroupsRequestwatcher);
    yield fork(updateGroupsRequestwatcher);
    yield fork(removeGroupRequestwatcher);
}

