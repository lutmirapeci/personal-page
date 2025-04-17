import React from "react";
// libs
import { ValidationError } from "@formspree/react";

const TextArea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  errors,
  rows,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-semibold">
        {label}
      </label>

      <textarea
        id={id}
        name={id}
        className="form-control bg-dark text-white border border-light"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows || 5}
        required
      />

      <ValidationError prefix={label} field={id} errors={errors} />
    </div>
  );
};

export default TextArea;
