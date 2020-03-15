import React from "react";
import { Input as ThemeInput } from "antd";
import ThemedField from "../ThemedField";

export default function InputText({ name, placeholder }) {
  return (
    <ThemedField
      CustomField={ThemeInput}
      name={name}
      type="text"
      placeholder={placeholder}
    />
  );
}
