import React from "react";
import { List, Avatar } from "antd";
import { withRouter, useHistory } from "react-router-dom";

const data = [
  { avatar: "D", title: "Dashboard", value: "home" },
  { avatar: "L", title: "Logic", value: "home" },
  { avatar: "D", title: "Delivery", value: "list" },
  { avatar: "G", title: "Gateway", value: "home" },
  { avatar: "P", title: "Packets", value: "packets" },
  { avatar: "T", title: "Things", value: "log" },
  { avatar: "S", title: "System", value: "home" },
];

const Side = () => {
  const history = useHistory();

  const sideItemClicked = (value) => {
    console.log("this item was clicked:", value);
    history.push(`/${value}`);
  };

  return (
    <div className="Side-root">
      <div className="Side-title">IOTStack</div>

      <List
        className="Side-cont"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            className="Side-item"
            onClick={() => sideItemClicked(item.value)}
          >
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

export default withRouter(Side);
