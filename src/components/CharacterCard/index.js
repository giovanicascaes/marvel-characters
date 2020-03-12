import React, { useState } from "react";
import { Card, Skeleton } from "antd";
import { StyledCover as Cover } from "./styles";
import { EditOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";

const { Meta } = Card;

const cardWidth = 280;
const cardHeight = 340;

export default function CharacterCard({ id, name, imageUrl, isLoading }) {
  const [redirectToDetails, setRedirectToDetails] = useState(false);

  const onTabChange = () => setRedirectToDetails(true);

  if (redirectToDetails) return <Redirect to={`/character/${id}`} />;

  return (
    <Card
      hoverable
      style={{ width: cardWidth }}
      cover={
        <Cover
          name={name}
          imageUrl={imageUrl}
          isLoading={isLoading}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
        />
      }
      actions={
        !isLoading && [<EditOutlined key="edit" onClick={onTabChange} />]
      }
      onTabChange={onTabChange}
    >
      <Skeleton paragraph={false} loading={isLoading} active>
        <Meta title={name} />
      </Skeleton>
    </Card>
  );
}
