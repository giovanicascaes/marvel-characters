import React from "react";
import { List, Skeleton } from "antd";
import { StyledCover as Cover, Wrapper } from "./styles";

export default function Serie({ isLoading, imageUrl, title, description }) {
  return (
    <List.Item>
      <Wrapper>
        <Cover isLoading={isLoading} imageUrl={imageUrl} />
        <div style={{ width: "100%" }}>
          <Skeleton loading={isLoading} active>
            <List.Item.Meta
              title={title}
              description={description || "<No description>"}
            />
          </Skeleton>
        </div>
      </Wrapper>
    </List.Item>
  );
}
