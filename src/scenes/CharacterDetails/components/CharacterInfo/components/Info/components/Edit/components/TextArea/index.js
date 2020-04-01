import React from "react";
import { Input } from "antd";
import ThemedField from "../ThemedField";

export default function TextArea({
  name,
  placeholder,
  minRows = 3,
  maxRows = 10
}) {
  return (
    <ThemedField
      CustomField={Input.TextArea}
      name={name}
      placeholder={placeholder}
      autoSize={{ minRows, maxRows }}
    />
  );
}
