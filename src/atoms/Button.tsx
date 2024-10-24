import { ButtonComponentProps } from "../types/components";

const ButtonComponent = ({
  img,
  icon,
  type,
  small = false,
  disabled,
  styleButton,
  eventButton,
  children,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={eventButton}
      disabled={disabled}
      className={`${
        small ? `custom-button-small` : "custom-button"
      } ${styleButton}`}
    >
      {img && img}
      {icon && icon}
      {children}
    </button>
  );
};

export default ButtonComponent;
