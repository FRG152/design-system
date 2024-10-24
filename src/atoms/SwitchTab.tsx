import { SwtichTabComponentProps } from "../types/components";

const SwitchTabComponent = ({
  icon,
  styleText,
  styleSwitchTab,
}: SwtichTabComponentProps) => {
  return (
    <div className={`custom-switchTab-container ${styleSwitchTab}`}>
      <div className="custom-switchTab-content">
        {icon && icon}
        <div className={`custom-switchTab-text ${styleText}`}>Retiro</div>
      </div>
    </div>
  );
};

export default SwitchTabComponent;
