import React from "react";
import { Form, Input, Button, Skeleton,Alert } from 'antd';
import {connect} from "react-redux";
import { loginRequest,errorHandle } from "../actions/admin";
import "antd/dist/antd.css";
import "../style/LoginForm.css";
import {browserHistory} from "react-router";

export default connect(({admin}) => ({admin})) ((props)=>{
  
const onFinish = (values) => {
    props.dispatch(
        loginRequest({
            username: values.username,
            password: values.password,
        })
    );
    
};

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  if (props.admin.isAuthUser) {
    browserHistory.push("/Homepage");
  }
  return (
    <Form
      className = "loginform"
      // {...layout}
      name="basic"
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>LOGIN</h1>
      <Form.Item
          className = "loginusername"
          
          // label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
      >
        {props.admin.isLoading ? (
          <Skeleton size ='default' paragraph={{ rows: 1 }}/>
        ) : (
        <Input placeholder = "Username" />)}
      </Form.Item>

      <Form.Item
        className = "loginpassword"
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        {props.admin.isLoading ? (
          <Skeleton size ='default' paragraph={{ rows: 1}} />
        ) : (
        <Input.Password placeholder="Password"/>)}
      </Form.Item>

      {/* <Form.Item className = "checkboxrememberme" {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item> {/*{...tailLayout}*/}
      {props.admin.isLoading ? (
          <Skeleton.Button active size="large" shape="square" />
        ) : (
        <Button className="submitButton" type="primary" htmlType="submit">
          Submit
        </Button>
        )}
      </Form.Item>
        {props.admin.error? (
          <Alert
          className="ErrorAlert"
          message="Error"
          description=""
          type="error"
          closable
          onClose={() =>{
            props.dispatch(errorHandle(""));
          }}
          
        />):null}
      

    </Form>
  );
});


