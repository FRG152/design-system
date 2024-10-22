import "./App.css";

import {
  X,
  Zap,
  Mail,
  Lock,
  Plus,
  Minus,
  Trash,
  Store,
  Loader,
  Camera,
  Search,
  OctagonX,
  CheckCircle,
  LoaderCircle,
  ShoppingCart,
} from "lucide-react";

import FabComponent from "./atoms/FabButton";
import PillComponent from "./atoms/Pill";
import InputComponent from "./atoms/Input";
import RangeComponent from "./atoms/Range";
import SearchComponent from "./atoms/Search";
import SelectComponent from "./atoms/Select";
import ButtonComponent from "./atoms/Button";
import ChipTapComponent from "./atoms/ChipTap";
import ProgressComponent from "./atoms/Progress";
import CheckboxComponent from "./atoms/Checkbox";
import SwitchTabComponent from "./atoms/SwitchTab";
import SwtichIconComponent from "./atoms/SwtichIcon";
import MoreButtonComponent from "./atoms/MoreButton";
import CounterButtonComponent from "./atoms/CounterButton";

import apple_logo from "./assets/logo/apple_logo.png";
import google_logo from "./assets/logo/google_logo.png";
import facebook_logo from "./assets/logo/facebook_logo.png";

function App() {
  return (
    <>
      {/* Button */}
      <div>
        <div className="my-2">
          <ButtonComponent type="button" styleButton="bg-blue_base">
            <div className={`custom-button-text text-neutral_0`}>Ingresar</div>
          </ButtonComponent>
          <ButtonComponent type="button" styleButton="bg-blue_darker">
            <div className={`custom-button-text text-neutral_0`}>Ingresar</div>
          </ButtonComponent>
        </div>
        <div className="my-2">
          <ButtonComponent
            type="button"
            styleButton="bg-neutral_0 border border-blue_base"
          >
            <div className={`custom-button-text text-blue_base`}>Ingresar</div>
          </ButtonComponent>
          <ButtonComponent
            type="button"
            styleButton="bg-neutral_0 border border-blue_darker"
          >
            <div className={`custom-button-text text-blue_darker`}>
              Ingresar
            </div>
          </ButtonComponent>
        </div>
        <div className="my-2">
          <ButtonComponent type="button" styleButton="bg-neutral_0">
            <div className={`custom-button-text text-blue_base`}>Ingresar</div>
          </ButtonComponent>
          <ButtonComponent type="button" styleButton="bg-neutral_0">
            <div className={`custom-button-text text-blue_darker`}>
              Ingresar
            </div>
          </ButtonComponent>
        </div>
        <div className="my-2">
          <ButtonComponent type="button" styleButton="bg-neutral_0">
            <div className={`custom-button-text text-[#fe115f]`}>Ingresar</div>
          </ButtonComponent>
          <ButtonComponent type="button" styleButton="bg-neutral_0">
            <div className={`custom-button-text text-[#af1d38]`}>Ingresar</div>
          </ButtonComponent>
        </div>
        <div className="my-2">
          <ButtonComponent
            type="button"
            disabled={true}
            styleButton="bg-neutral_300"
          >
            <div className={`custom-button-text text-neutral_500`}>
              Ingresar
            </div>
          </ButtonComponent>
          <ButtonComponent
            type="button"
            disabled={true}
            styleButton="bg-neutral_300"
          >
            <div className={`custom-button-text text-neutral_500`}>
              Ingresar
            </div>
          </ButtonComponent>
        </div>
        <div className="my-2">
          <ButtonComponent
            type="button"
            styleButton="border border-neutral_300"
          >
            <div className={`custom-button-text text-neutral_500`}>
              Ingresar
            </div>
          </ButtonComponent>
          <ButtonComponent
            type="button"
            styleButton="border border-neutral_300"
          >
            <div className={`custom-button-text text-neutral_500`}>
              Ingresar
            </div>
          </ButtonComponent>
        </div>
      </div>
      {/* Login Button */}
      <div className="flex flex-col gap-4">
        <ButtonComponent
          type="button"
          img={<img src={facebook_logo} alt="img" />}
          styleButton="bg-[#1877F2]"
        >
          <div className={`custom-button-text text-neutral_0`}>
            Continuar con Facebook
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          img={<img src={google_logo} alt="img" />}
          styleButton="border border-neutral_300"
        >
          <div className={`custom-button-text text-neutral_500`}>
            Continuar con Google
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          img={<img src={apple_logo} alt="img" />}
          styleButton="border border-neutral_300"
        >
          <div className={`custom-button-text text-neutral_500`}>
            Continuar con Apple
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          icon={<Mail color="text-neutral_0" />}
          styleButton="bg-blue_base"
        >
          <div className={`custom-button-text text-neutral_0`}>
            Continuar con mi correo
          </div>
        </ButtonComponent>
      </div>
      {/* Small Button */}
      <div className="my-2">
        <ButtonComponent
          type="button"
          icon={<Camera className="text-neutral_0 custom-button-small-icon" />}
          styleButton="bg-blue_base"
          small={true}
        >
          <div className={`custom-button-small-text text-neutral_0`}>
            Ingresar
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          icon={<Camera className="text-blue_base custom-button-small-icon" />}
          styleButton="border border-blue_base"
          small={true}
        >
          <div className={`custom-button-small-text text-blue_base`}>
            Ingresar
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          icon={<Camera className="text-blue_base custom-button-small-icon" />}
          styleButton="bg-neutral_0"
          small={true}
        >
          <div className={`custom-button-small-text text-blue_base`}>
            Ingresar
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          icon={
            <Camera className="text-neutral_500 custom-button-small-icon" />
          }
          styleButton="border border-neutral_500"
          small={true}
        >
          <div className={`custom-button-small-text text-neutral_500`}>
            Ingresar
          </div>
        </ButtonComponent>
        <ButtonComponent
          type="button"
          icon={
            <Camera className="text-neutral_500 custom-button-small-icon" />
          }
          styleButton="bg-neutral_300"
          small={true}
        >
          <div className={`custom-button-small-text text-neutral_500`}>
            Ingresar
          </div>
        </ButtonComponent>
      </div>
      {/* Fab Button */}
      <div>
        <FabComponent
          text="12"
          icon={<ShoppingCart className="custom-fab-icon text-neutral_0" />}
        />
      </div>
      {/* More Button */}
      <div>
        <MoreButtonComponent />
      </div>
      {/* Counter Button */}
      <div>
        <CounterButtonComponent
          iconLeft={<Minus className="custom-button-icon text-neutral_0" />}
          iconRight={<Plus className="custom-button-icon text-neutral_0" />}
          styleButton="bg-neutral_100"
        >
          <div className="custom-button-counter-text">1 un</div>
        </CounterButtonComponent>
        <CounterButtonComponent
          iconLeft={<Minus className="custom-button-icon text-neutral_0" />}
          iconRight={<Plus className="custom-button-icon text-neutral_0" />}
          styleButton="bg-blue_base"
        >
          <div className="custom-button-counter-text text-neutral_0">1 un</div>
        </CounterButtonComponent>
        <CounterButtonComponent
          iconLeft={<Trash className="custom-button-icon text-[#001638]" />}
          iconRight={<Plus className="custom-button-icon text-neutral_900" />}
          styleButton="bg-neutral_100"
        >
          <div className="custom-button-counter-text">1 un</div>
        </CounterButtonComponent>
        <CounterButtonComponent styleButton="bg-neutral_100">
          <div className="custom-button-counter-text">1 un</div>
        </CounterButtonComponent>
        <CounterButtonComponent
          iconLeft={<Trash className="custom-button-icon text-neutral_0" />}
          iconRight={<Plus className="custom-button-icon text-neutral_0" />}
          styleButton="bg-blue_base"
        >
          <div className="custom-button-counter-text text-neutral_0">1 un</div>
        </CounterButtonComponent>
      </div>
      {/* Input */}
      <div>
        <InputComponent
          type="text"
          name="input"
          label="Label Text"
          placeholder="Placeholder"
          icon={<Lock className="custom-input-icon text-neutral_900" />}
        />
        <SearchComponent
          iconLeft={<Search className="custom-input-search-icon" />}
          iconRight={<X className="custom-input-search-icon" />}
          placeholder={"¿Qué estás buscando?"}
        />
      </div>
      {/* Select */}
      <div>
        <SelectComponent
          name={"select"}
          options={[
            { value: "Label1", text: "Label1" },
            { value: "Label1", text: "Label1" },
            { value: "Label1", text: "Label1" },
          ]}
        />
        <SelectComponent
          name={"select"}
          label={"label"}
          options={[
            { value: "Label1", text: "Label1" },
            { value: "Label1", text: "Label1" },
            { value: "Label1", text: "Label1" },
          ]}
        />
      </div>
      {/* Range */}
      <div>
        <RangeComponent />
      </div>
      {/* Switch Tab */}
      <div>
        <SwitchTabComponent
          icon={<Store className="custom-switchTab-icon text-pink_base" />}
          styleSwitchTab="border border-pink_base text-pink_base"
        />
        <SwitchTabComponent
          icon={<Store className="custom-switchTab-icon text-neutral_900" />}
          styleSwitchTab=" text-neutral_900"
        />
        <SwitchTabComponent
          icon={<Store className="custom-switchTab-icon text-[#76a0b2]" />}
          styleSwitchTab="text-[#76a0b2]"
        />
      </div>
      {/* Checkbox */}
      <div>
        <CheckboxComponent />
      </div>
      {/* Pill */}
      <div>
        <PillComponent
          text={"Estado"}
          icon={<Loader className="custom-pill-icon text-neutral_900 h" />}
          stylePill={"bg-neutral_300"}
          styleText={"text-neutral_900"}
        />
        <PillComponent
          text={"Estado"}
          icon={
            <LoaderCircle className="custom-pill-icon text-yellow_darker" />
          }
          stylePill={"bg-yellow_light"}
          styleText={"text-yellow_darker"}
        />
        <PillComponent
          text={"Estado"}
          icon={<CheckCircle className="custom-pill-icon text-green_darker" />}
          stylePill={"bg-green_light"}
          styleText={"text-green_darker"}
        />
        <PillComponent
          text={"Estado"}
          icon={<OctagonX className="custom-pill-icon" />}
          stylePill={"bg-red_light"}
          styleText={"text-red_darker"}
        />
      </div>
      {/* Chips Taps */}
      <div>
        <ChipTapComponent
          styleChipTap={"custom-chipTap-container bg-blue_base"}
        >
          <div className="text-neutral_0 text-lg font-bold leading-normal">
            Tocar Timbre
          </div>
        </ChipTapComponent>
        <ChipTapComponent
          styleChipTap={
            "custom-chipTap-container bg-neutral_0 border border-blue_dark"
          }
        >
          <div className="text-[#001638] text-lg font-normal leading-normal">
            Tocar Timbre
          </div>
        </ChipTapComponent>
        <ChipTapComponent
          styleChipTap={"custom-chipTap-container bg-blue_light"}
        >
          <div className="text-[#001638] text-lg font-normal leading-normal">
            Tocar Timbre
          </div>
        </ChipTapComponent>
        <ChipTapComponent
          styleChipTap={"custom-chipTap-large-container bg-blue_base"}
        >
          <div className="text-neutral_0 text-xl font-normal leading-normal">
            Femenino
          </div>
        </ChipTapComponent>
        <ChipTapComponent
          styleChipTap={"custom-chipTap-large-container bg-neutral_300"}
        >
          <div className="text-[#001638 text-xl font-normal leading-normal">
            Femenino
          </div>
        </ChipTapComponent>
      </div>
      <div className="my-2">
        <ProgressComponent value="0" max="100" />
      </div>
      <div className="my-2">
        <ProgressComponent value="25" max="100" />
      </div>
      <div className="my-2">
        <ProgressComponent value="50" max="100" />
      </div>
      <div className="my-2">
        <ProgressComponent value="75" max="100" />
      </div>
      <div className="my-2">
        <ProgressComponent value="100" max="100" />
      </div>
      <div>
        <SwtichIconComponent
          styleSwitchIcon={"bg-blue_base"}
          icon={<Zap className="custom-switchIcon-icon text-neutral_0" />}
        />
        <SwtichIconComponent
          styleSwitchIcon={"bg-neutral_0"}
          icon={<Zap className="custom-switchIcon-icon text-neutral_900" />}
        />
      </div>
    </>
  );
}

export default App;
