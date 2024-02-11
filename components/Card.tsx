const Card: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  children,
  ...restProps
}) => (
  <div
    className={`card border-0 rounded-4 services-gradient ${
      className ? className : ""
    }`}
    {...restProps}
  >
    <div className="card-body">{children}</div>
  </div>
);

export default Card;
