import React from "react";
// libs
import { ValidationError } from "@formspree/react";

const CustomInput = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        className="form-control bg-dark text-white border border-light"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      <ValidationError prefix={label} field={id} errors={errors} />
    </div>
  );
};

export default CustomInput;
