import React from "react";
import { Descriptions, Skeleton } from "antd";
import { Wrapper, StyledCover as Cover } from "./styles";

export default function Info({ imageUrl, isLoading, id, name, description }) {
  return (
    <Wrapper>
      <Cover imageUrl={imageUrl} isLoading={isLoading} name={name} />
      <Skeleton loading={isLoading} paragraph={{ rows: 1 }} active>
        <Descriptions title="Character Info" column={2}>
          <Descriptions.Item label="ID">{id}</Descriptions.Item>
          <Descriptions.Item label="Name">{name}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {description || "<None>"}
          </Descriptions.Item>
        </Descriptions>
      </Skeleton>
    </Wrapper>
  );
}
