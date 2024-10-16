import styles from "./input.module.css";
import { InputComponentProps } from "../types/components";

const InputComponent = ({
  label,
  type,
  name,
  formik,
  disabled,
  placeholder,
}: InputComponentProps) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={formik.values[name]}
        disabled={disabled}
        onChange={formik.handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
      {formik.errors[name] && formik.touched[name] ? (
        <div className={styles.error}>{formik.errors[name]}</div>
      ) : null}
    </>
  );
};

export default InputComponent;
