
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../common/Header";
// import { loginRequest } from "../actions/actions";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  admin: PropTypes.object,
};
export default connect(({ admin }) => ({ admin }))(App);
