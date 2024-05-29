import { forwardRef } from "react";
import "./RadioInput.scss";

const RadioInput = forwardRef(({ id, label, error, ...props }, ref) => {
  return (
    <>
      {error && <span className="radio-input__error">{error}</span>}
      <div className={`radio-input ${error && "radio-input--err"}`}>
        <input
          type="radio"
          id={id}
          ref={ref}
          {...props}
          className="radio-input__input"
        />
        {label && (
          <label htmlFor={id} className="radio-input__label">
            {label}
          </label>
        )}
      </div>
    </>
  );
});

export default RadioInput;
