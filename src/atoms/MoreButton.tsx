import { ChevronRight } from "lucide-react";
import { MoreButtonComponentProps } from "../types/components";

const MoreButtonComponent = ({ eventFunction }: MoreButtonComponentProps) => {
  return (
    <button className="custom-button-more-container" onClick={eventFunction}>
      <div className="custom-button-more-content">
        <ChevronRight className="custom-button-more-icon text-neutral_0 " />
      </div>
      <div className="custom-button-more-text">Ver más</div>
    </button>
  );
};

export default MoreButtonComponent;
