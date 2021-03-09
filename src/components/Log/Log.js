import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const columnData = [
  {
    title: "Time",
    dataIndex: "date_created",
  },
  {
    title: "Signal",
    dataIndex: "rssi",
  },
  {
    title: "Battery",
    dataIndex: "bat",
  },
  {
    title: "Type",
    dataIndex: "payload",
  },
  {
    title: "ID",
    dataIndex: "uid",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Data",
    dataIndex: "",
  },
];

const Log = () => {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/log");
      console.log("query result", result.data);
      setLogData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="Table-root">
      <div className="Dash-title">Things</div>
      <Table
        className="Table"
        size={"small"}
        columns={columnData}
        dataSource={logData}
      />
    </div>
  );
};

export default Log;
