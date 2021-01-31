import React, { useState, useEffect } from "react";
import {connect } from "react-redux";
import {Table, Select, Space, Alert, Popconfirm, Skeleton} from "antd";
import {getListGroupsRequest, updateGroupsRequest,removeGroupRequest,handleGroupsError} from "../actions/groups";

import "../style/GroupList.css";
import EditModal from "./EditModal";

export default connect(({ admin, groups }) => ({ admin, groups }))((props) => 
{
    //use Hooks
    const [pagination, setPagination] = useState({ current: 1, pageSize: 3 });
    const [isModalShowed, setIsModalShowed] = useState(false);
    const [isConfirmShowed, setIsConfirmShowed] = useState(false);

    useEffect(() => {
      props.dispatch(getListGroupsRequest({ token: props.admin.isAuthUser }));
    }, []);
    //Handle for Controlling pagination
    const handleTableChange = (pagination) => {
      props.dispatch(
        getListGroupsRequest({
          token: props.admin.isAuthUser,
          page: pagination.current,
          pageSize: pagination.pageSize,
        })
      );
      setPagination({ current: pagination.current, pageSize: 3 });
    };
  
    //Handle for announcing that "Edit" is Clicked then show Modal
    const handleVisibleModal = (record) => {
      setIsModalShowed(record);
    };
    //Handle for Submit what has been updated
    const handleSubmitEditing = (values) => {
      let { description, id, name, permissions } = values;
      props.dispatch(
        updateGroupsRequest({
          token: props.admin.isAuthUser,
          page: pagination.current,
          pageSize: pagination.pageSize,
          description,
          id,
          name,
          permissions,
        })
      );
    };
    //Handle for announcing that "Delete" is clicked then show Confirm
    const handleVisibleConfirm = (record) => {
      setIsConfirmShowed(record);
    };
    
    //Handle for Delete what have been chosen and confirmed
    const handleDelete = () => {
      props.dispatch(
        removeGroupRequest({
          token: props.admin.isAuthUser,
          id: isConfirmShowed.id,
          page: pagination.current,
          pageSize: pagination.pageSize,
        })
      );
      setTimeout(() => {
        setIsConfirmShowed(false);
      }, 1000);
    };
      

    //Customize each column of table
    const columns = [
        {
          title: "id",
          dataIndex: "id",
          key: "id",
        },
        {
            title: "name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "permissions",
            dataIndex: "permissions",
            key: "permissions",
            //Customize for permission selections
            render: (permissions) => 
            {
                if (permissions)
                    return (
                        <Select 
                            value={permissions[0].name}
                        >
                            {permissions.map((permission) => {
                                return (
                                    <Select.Option key={permission.id}>
                                        {permission.name}
                                    </Select.Option>
                                );
                                })
                            }
                    </Select>
                    );
                else return <div/>;
            },
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
        },
        {
            
            title: "Action",
            key: "action",
            render: (record) => (
              <Space size="middle">
              <a
                onClick={(e) => {
                  handleVisibleModal(record);
                }}
              >
                Edit
              </a>
              <Popconfirm
                title="Are you sure?"
                visible={isConfirmShowed.id === record.id ? true : false}
                onConfirm={handleDelete}
                okButtonProps={{ loading: props.groups.isLoading }}
                onCancel={() => {
                  setIsConfirmShowed(false);
                }}
              >
                <a
                  onClick={(e) => {
                    handleVisibleConfirm(record);
                  }}
                >
                  Delete
                </a>
              </Popconfirm>
            </Space>
            ),
        }

    ];

    if (props.groups.items.length > 0)
    {
      let groups = props.groups.items;
      return (
        <div
        style={{
          width: "100%",
          minWidth: "1000px",

        }}
      >
        {props.groups.error ? (
          <Alert
            className="alert"
            message={
              props.groups.error === "Edit successfully" ? "Edited" : "Error"
            }
            description={`${props.groups.error}`}
            type={props.groups.error === "Edit successfully" ? "success" : "error"}
            // showIcon
            closable
            onClose={() => {
              props.dispatch(handleGroupsError(""));
            }}
          />
        ) : null}

        <Table
          style={{
            minWidth: "1000px",
          }}
          size="large"
          tableLayout="fixed"
          columns={columns}
          dataSource={groups}
          rowKey={(record) => {
            return record.id;
          }}
          pagination={pagination}
          // loading={props.groups.isLoading}
          onChange={handleTableChange}
        />
        {isModalShowed ? (
          <EditModal
            handleVisibleModal={handleVisibleModal}
            record={isModalShowed}
            isLoading={props.groups.isLoading}
            handleSubmitEditing={handleSubmitEditing}
          />
        ) : null}
      </div>
          );
    }

        return (
          <div
            style={{
              width: "100%",
              minWidth: "1000px",
            }}
          >
            <Skeleton
              paragraph={{ rows: 6 }}
              active
              loading={props.groups.items.length > 0 ? false : true}
            />
          </div>
        );
});