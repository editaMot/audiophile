import { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(
  ({ type = "text", id, error, label, ...props }, ref) => {
    return (
      <div className={`input-wrapper ${error && "input-wrapper--err"}`}>
        {label && (
          <label
            htmlFor={id}
            className={`input__label ${error && "input__label--err"}`}
          >
            {label}
          </label>
        )}
        {error && <span className="input__error">{error}</span>}
        <input
          type={type}
          id={id}
          ref={ref}
          className={`input__input ${error && "input__input--err"} `}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
