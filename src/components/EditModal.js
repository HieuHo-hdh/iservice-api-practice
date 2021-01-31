import { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import Checkbox from "./Checkbox";


const EditModal = (props) => {

  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    let record = props.record.permissions && [...props.record.permissions];
    if (record) 
        setCheckedList(record.map((e) => e.id));
    else setCheckedList([]);
  }, []);

  const handleOk = (values) => {
    values = { ...values.group, permissions: checkedList, id: props.record.id };
    props.handleSubmitEditing(values);
    props.handleVisibleModal(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.handleVisibleModal(false);
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };
    //4 parts: 
    //-title: edit groups
    //-permissions: Check all? or Check some? Checkbox.js
    //Description

  return (
    <>
      <Modal
        title={"Edit Group: " + props.record.name}
        visible={!!props.record}
        confirmLoading={props.isLoading}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={handleOk}
        >
          <Form.Item
            name={["group", "name"]}
            label="Group Name"
            rules={[{ required: true }]}
            initialValue={props.record.name}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["group", "permissions"]} label="Permissions">
            <Checkbox
              checkedList={checkedList || []}
              setCheckedList={setCheckedList}
            />
          </Form.Item>
          <Form.Item
            name={["group", "description"]}
            label="Description"
            rules={[{ required: false }]}
            initialValue={props.record.description}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 5 }}
          >
            <Button
              type="primary"
              htmlType="submit"
            >
              OK
            </Button>

            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
