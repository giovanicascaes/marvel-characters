import React from "react";
import Message from "../Message";

export default function Emptiable({
  children,
  titleWhenEmpty,
  subtitleWhenEmpty
}) {
  if (!children) {
    return <Message title={titleWhenEmpty} subtitle={subtitleWhenEmpty} />;
  }
  return <>{children}</>;
}
