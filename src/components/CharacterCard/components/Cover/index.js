import React from "react";
import { Skeleton } from "antd";

export default function Cover({ name, url, isLoading, style }) {
  if (isLoading)
    return (
      <Skeleton.Input loading={isLoading} size="large" active style={style} />
    );

  return <img alt={name} src={url} style={style} />;
}
