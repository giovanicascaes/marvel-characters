import React from "react";
import { Descriptions, Skeleton } from "antd";

export default function View({ isLoading, id, name, description }) {
  return (
    <Skeleton loading={isLoading} paragraph={{ rows: 3 }} active>
      <div>
        <h3>Character Info</h3>
        <Descriptions column={2}>
          <Descriptions.Item label="ID" key="id">
            {id}
          </Descriptions.Item>
          <Descriptions.Item label="Name" key="name">
            {name}
          </Descriptions.Item>
          <Descriptions.Item label="Description" key="description">
            {description || "<None>"}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Skeleton>
  );
}
