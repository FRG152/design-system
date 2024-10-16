import ButtonComponent from "../atoms/Button";
import InputComponent from "../atoms/Input";

const FormField = () => {
  return (
    <form>
      <InputComponent
        type="text"
        name="user"
        disabled={false}
        label="Usuario"
        placeholder="Ingrese su usuario"
      />
      <InputComponent
        type="password"
        name="password"
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
