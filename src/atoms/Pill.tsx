import { PillComponentProps } from "../types/components";

const PillComponent = ({
  icon,
  text,
  styleText,
  stylePill,
}: PillComponentProps) => {
  return (
    <div className={`custom-pill-container ${stylePill}`}>
      {icon && icon}
      <div className={`custom-pill-text ${styleText}`}>{text}</div>
    </div>
  );
};

export default PillComponent;
