"use client";

import { CustomButtonProps } from "@/types";

export const CustomButton = ({
  title,
  containerStyles = "",
  btnType = "button",
  handleClick = () => {},
}: CustomButtonProps): React.JSX.Element => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
