import React from "react";
import { List, Avatar } from "antd";

const data = [
  { avatar: "D", title: "Dashboard" },
  { avatar: "L", title: "Logic" },
  { avatar: "D", title: "Delivery" },
  { avatar: "G", title: "Gateway" },
  { avatar: "P", title: "Packets" },
  { avatar: "T", title: "Things" },
  { avatar: "S", title: "System" },
];

const Side = () => {
  const sideItemClicked = (e) => {
    console.log("this item was clicked:", e.target.textContent);
  };

  return (
    <div className="Side-root">
      <div className="Side-title">IOTStack</div>

      <List
        className="Side-cont"
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="Side-item" onClick={sideItemClicked}>
            <List.Item.Meta
              avatar={<Avatar>{item.avatar}</Avatar>}
              title={item.title}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default Side;
