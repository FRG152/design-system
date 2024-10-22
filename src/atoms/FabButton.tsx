import { FabComponentProps } from "../types/components";

const FabComponent = ({ text, icon }: FabComponentProps) => {
  return (
    <button className="custom-fab-container">
      <div className="custom-fab-content">
        <div className="custom-fab-text">{text}</div>
        <div className="custom-fab-icon">{icon}</div>
      </div>
    </button>
  );
};

export default FabComponent;
