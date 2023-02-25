import React from "react";

const InputField = ({
  processData,
  value,
  type,
  label,
  name,
  id,
  placeholder,
}) => {
  const captureText = (e) => {
    processData(e);
  };
  return (
    <div className="form-floating mb-3">
      <input
        required
        onChange={captureText}
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
