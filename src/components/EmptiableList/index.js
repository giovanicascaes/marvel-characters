import React from "react";
import Empty from "../Empty";

export default function EmptiableList({
  children,
  titleWhenEmpty,
  subtitleWhenEmpty
}) {
  if (!children) {
    return <Empty title={titleWhenEmpty} subtitle={subtitleWhenEmpty} />;
  }
  return <>{children}</>;
}
