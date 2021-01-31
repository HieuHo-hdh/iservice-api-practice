import React from "react";
import { connect } from "react-redux";
import {browserHistory} from "react-router";

import "../style/Homepage.css";
import Logout from "./Logout";
import GroupList from "./GroupList";

export default connect(({ admin,  groups}) => ({ admin,  groups}))((props) => {
  if (!props.admin.isAuthUser) {
    browserHistory.push("/");
  }
  return (
    <div>
      <div className = "Logoutbtn">
        {/* <Button
          type="primary"
          loading={loading}
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              cookies.deleteCookie("session_id");
              props.dispatch(logoutRequest({ token: props.admin.isAuthUser }));
            }, 1000);
          }}
        >
          Logout
        </Button> */}
        <Logout/>
        </div>
      <GroupList />
    </div>
  );
});
