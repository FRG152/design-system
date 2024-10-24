import { CounterButtonComponentProps } from "../types/components";

const CounterButtonComponent = ({
  children,
  iconLeft,
  iconRight,
  styleButton,
}: CounterButtonComponentProps) => {
  return (
    <div className={`custom-button-counter-container ${styleButton}`}>
      <div className="custom-button-counter-icon">{iconLeft && iconLeft}</div>
      {children}
      <div className="custom-button-counter-icon">{iconRight && iconRight}</div>
    </div>
  );
};

export default CounterButtonComponent;
