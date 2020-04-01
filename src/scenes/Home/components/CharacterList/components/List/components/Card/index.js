import React, { useState } from "react";
import { Card as ThemeCard, Skeleton } from "antd";
import Cover from "components/Cover";
import { Redirect } from "react-router-dom";

const { Meta } = ThemeCard;

export const CARD_WIDTH = 280;
export const CARD_HEIGHT = 340;

export default function Card({ id, name, imageUrl, isLoading }) {
  const [redirectToDetails, setRedirectToDetails] = useState(false);

  const onClick = () => setRedirectToDetails(true);

  if (redirectToDetails) return <Redirect to={`/character/${id}`} push />;

  return (
    <ThemeCard
      hoverable={!isLoading}
      style={{ width: CARD_WIDTH, borderRadius: 10 }}
      cover={
        <Cover
          name={name}
          imageUrl={imageUrl}
          isLoading={isLoading}
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}
        />
      }
      onClick={onClick}
    >
      <Skeleton paragraph={false} loading={isLoading} active>
        <Meta title={name} />
      </Skeleton>
    </ThemeCard>
  );
}
