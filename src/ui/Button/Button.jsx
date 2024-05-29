import "./Button.scss";

const Button = ({ children, kind = "primary", ...props }) => {
  return (
    <button className={`btn ${kind ? `btn--${kind}` : ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
