import styles from "./button.module.css";
import { ButtonComponentProps } from "../types/components";

const ButtonComponent = ({
  type,
  text,
  style,
  disabled,
  eventButton,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={eventButton}
      className={styles.button}
      style={{ ...style }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
