import {
  initialValues,
  validationSchema,
} from "../validations/loginValidation";
import { useFormik } from "formik";
import ButtonComponent from "../atoms/Button";
import InputComponent from "../atoms/Input";

const FormField = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <form>
      <InputComponent
        type="text"
        name="user"
        formik={formik}
        disabled={false}
        label="Usuario"
        placeholder="Ingrese su usuario"
      />
      <InputComponent
        type="password"
        name="password"
        formik={formik}
        disabled={false}
        label="Contraseña"
        placeholder="Ingrese su contraseña"
      />
      <ButtonComponent
        type="button"
        text="Iniciar Session"
        disabled={false}
        eventButton={() => {}}
      />
    </form>
  );
};

export default FormField;
