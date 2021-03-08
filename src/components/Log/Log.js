import React from "react";
import { Table } from "antd";

const columnData = [
  {
    title: "Time",
    dataIndex: "name",
  },
  {
    title: "Signal",
    dataIndex: "signal",
  },
  {
    title: "Battery",
    dataIndex: "battery",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Data",
    dataIndex: "data",
  },
];
const tableData = [];

const Log = () => {
  return (
    <div className="Table-root">
      <div className="Dash-title">Things</div>
      <Table className="Table" columns={columnData} dataSource={tableData} />
    </div>
  );
};

export default Log;
