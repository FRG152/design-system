import { ProgressComponentProps } from "../types/components";

const ProgressComponent = ({ max, value }: ProgressComponentProps) => {
  return (
    <div className="w-[316px] h-1 relative">
      <div className="w-[316px] h-1 left-0 top-0 absolute opacity-40 bg-[#cfe4f7] rounded-sm"></div>
      <progress
        color="#375dfb"
        value={value}
        className="h-1 left-0 top-0 absolute  rounded-sm"
        max={max}
      ></progress>
    </div>
  );
};

export default ProgressComponent;
