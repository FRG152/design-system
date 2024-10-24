import { InputComponentProps } from "../types/components";

const InputComponent = ({
  icon,
  type,
  // name,
  label,
  // formik,
  disabled,
  placeholder,
}: InputComponentProps) => {
  return (
    <>
      <div className="custom-input-container">
        <div className="custom-input-label">{label}</div>
        <div className={`custom-box`}>
          <div className="custom-content">
            {icon && icon}
            <div className="custom-input-content">
              <input
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className="custom-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-input-container">
        <div className="custom-input-label">{label}</div>
        <div className={`custom-box-error`}>
          <div className="custom-content">
            {icon && icon}
            <div className="custom-input-content">
              <input
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                className="custom-input"
              />
            </div>
          </div>
        </div>
        {/* {formik.errors[name] && formik.touched[name] ? ( */}
        <div className="custom-input-text-error">
          Crea tu cuenta de manera rápida con Google y Apple.
        </div>
        {/* ) : null} */}
      </div>
    </>
  );
};

export default InputComponent;
