import React, { useState } from "react";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const inputStyle = {
    padding: "8px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid gray",
    borderColor: focused && inputProps.value === "" ? "red" : "gray", // Apply red border if input is invalid and focused
  };

  const spanStyle = {
    fontSize: "12px",
    padding: "3px",
    color: "red",
    display: focused && inputProps.value === "" ? "block" : "none", // Show the span if input is invalid and focused
  };

  return (
    <div>
      <div className="flex flex-col w-[550px] h-[100px]">
        <label className="text-gray-500 text-xs">{label}</label>
        <input 
          style={inputStyle}
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
        />
        <span style={spanStyle}>{errorMessage}</span>
      </div>
    </div>
  );
}

export default FormInput;
