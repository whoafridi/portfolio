type Prop = JSX.IntrinsicElements["button"] & {
  outline?: boolean;
  danger?: boolean;
  rounded?: boolean;
  light?: boolean;
};

const Button: React.FC<Prop> = ({
  children,
  className,
  outline = false,
  rounded = false,
  light = false,
  ...restprops
}) => (
  <button
    {...restprops}
    className={`btn ${
      outline ? "btn-outline-dark" : light ? "btn-outline-light" : "btn-warning"
    }
    ${rounded ? "rounded" : "rounded-pill"}
    ${className ? className : ""}`}
  >
    {children}
  </button>
);

export default Button;
