"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps): React.JSX.Element => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
