import React from "react";
import { Skeleton } from "antd";

export default function Cover({
  isLoading,
  name,
  imageUrl,
  cardHeight,
  className
}) {
  if (isLoading)
    return (
      <Skeleton.Input
        loading={isLoading}
        size="large"
        active
        className={className}
        style={{ height: cardHeight }}
      />
    );

  return <img alt={name} src={imageUrl} className={className} />;
}
