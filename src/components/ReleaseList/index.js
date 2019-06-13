/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Version No.",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Abstract",
    dataIndex: "abstract",
    key: "address"
  },
  {
    title: "Pre-release time",
    dataIndex: "preReleaseTime",
    key: "preReleaseTime"
  },
  {
    title: "Pre-release account",
    dataIndex: "preReleaseAccount",
    key: "preReleaseAccount"
  },
  {
    title: "Official release time",
    dataIndex: "releaseTime",
    key: "releaseTime"
  },
  {
    title: "Official release account",
    dataIndex: "releaseAccount",
    key: "releaseAccount"
  },
  {
    title: "Operations",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Pre-release</a>
        <Divider type="vertical" />
        <a href="javascript:;">Release</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default class ReleaseList extends Component {
  render() {
    return <Table columns={columns} dataSource={data} />;
  }
}
