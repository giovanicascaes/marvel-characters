import React from "react";
import { List, Skeleton } from "antd";
import { StyledCover as Cover, Wrapper, InfoWrapper } from "./styles";

export default function Serie({ isLoading, imageUrl, title, description }) {
  return (
    <List.Item>
      <Wrapper>
        <Cover isLoading={isLoading} imageUrl={imageUrl} />
        <InfoWrapper>
          <Skeleton loading={isLoading} active>
            <List.Item.Meta
              title={title}
              description={description || "<No description>"}
            />
          </Skeleton>
        </InfoWrapper>
      </Wrapper>
    </List.Item>
  );
}
