import * as Yup from "yup";

export const initialValues = {
  user: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  user: Yup.string().required("El usuario el requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
