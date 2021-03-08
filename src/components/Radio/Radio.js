import React from "react";
import { Table } from "antd";

const columnData = [];
const tableData = [];

const Radio = () => {
  return (
    <div>
      <Table columns={columnData} dataSource={tableData} />
    </div>
  );
};

export default Radio;
