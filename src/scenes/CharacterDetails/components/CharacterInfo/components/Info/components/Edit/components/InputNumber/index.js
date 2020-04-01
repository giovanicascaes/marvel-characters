import React from "react";
import ThemedField from "../ThemedField";
import Input from "./components/Input";

export default function InputNumber({
  name,
  placeholder,
  min = 1,
  max = 9999999,
  precision = 0,
  step = 1
}) {
  return (
    <ThemedField
      CustomField={Input}
      name={name}
      id={name}
      type="number"
      placeholder={placeholder}
      min={min}
      max={max}
      precision={precision}
      step={step}
      style={{ width: "100%" }}
    />
  );
}
