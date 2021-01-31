import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { logoutRequest } from "../actions/admin";
import * as cookies from "../utils/cookies";
export default connect(({ admin, groups }) => ({ admin, groups }))((props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
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
    </Button>
  );
});
