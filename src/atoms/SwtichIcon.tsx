import { SwitchIconComponentProps } from "../types/components";

const SwtichIconComponent = ({
  icon,
  styleSwitchIcon,
}: SwitchIconComponentProps) => {
  return (
    <div className={`custom-switchIcon-container ${styleSwitchIcon}`}>
      <div className="custom-switchIcon-content">
        <div className="custom-switchIcon-content-icon">{icon && icon}</div>
      </div>
    </div>
  );
};

export default SwtichIconComponent;
