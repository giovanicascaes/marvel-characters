import React from "react";
import { useField } from "formik";
import { CloseCircleFilled } from "@ant-design/icons";

export default function ThemedField({ CustomField, ...props }) {
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;
  const validateWithError = touched && error;

  return (
    <div
      className={`ant-row ant-form-item ant-form-item-with-help ant-form-item-has-feedback ${validateWithError &&
        "ant-form-item-has-error"}`}
    >
      <div className="ant-col ant-form-item-control">
        <div className="ant-form-item-control-input">
          <div className="ant-form-item-control-input-content">
            <CustomField {...field} {...helpers} {...props} />
          </div>
          {validateWithError && (
            <span className="ant-form-item-children-icon">
              <CloseCircleFilled />
            </span>
          )}
        </div>
        {validateWithError && (
          <div className="ant-form-item-explain show-help show-help-enter show-help-enter-active">
            <div>{error}</div>
          </div>
        )}
      </div>
    </div>
  );
}
