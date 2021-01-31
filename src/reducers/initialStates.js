import * as cookies from "../utils/cookies";

export const INITIAL_STATE = {
  isAuthUser: cookies.getCookie("session_id"), //get Cookie (applied by utils/cookies)
  isLoading: false, //Check if data is loading or not ?, then use skeleton as progressbar
  error: null,  //Check if there're any errors
};

export const INITIAL_GROUPS_STATE = {
  items: [],  //
  isLoading: false,
  error: null,
};