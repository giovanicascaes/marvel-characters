import React from "react";
import { InputNumber } from "antd";

export default function Input({ name, ...props }) {
  return (
    <InputNumber
      {...props}
      onChange={value =>
        props.onChange({
          target: {
            value,
            type: "number",
            name
          }
        })
      }
    />
  );
}
