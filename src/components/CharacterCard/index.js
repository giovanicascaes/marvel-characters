import React from "react";
import { Card, Skeleton } from "antd";
import Cover from "./components/Cover";

const { Meta } = Card;

const cardWidth = 280;
const cardHeight = 340;

export default function Character({ name, url, isLoading }) {
  return (
    <Card
      hoverable
      style={{ width: cardWidth }}
      cover={
        <Cover
          name={name}
          url={url}
          isLoading={isLoading}
          style={{ width: cardWidth, height: cardHeight, objectFit: "cover" }}
        />
      }
    >
      <Skeleton paragraph={false} loading={isLoading} active>
        <Meta title={name} />
      </Skeleton>
    </Card>
  );
}
