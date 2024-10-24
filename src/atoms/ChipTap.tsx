import { ChipTapComponentProps } from "../types/components";

const ChipTapComponent = ({
  children,
  styleChipTap,
}: ChipTapComponentProps) => {
  return <div className={`${styleChipTap}`}>{children}</div>;
};

export default ChipTapComponent;
