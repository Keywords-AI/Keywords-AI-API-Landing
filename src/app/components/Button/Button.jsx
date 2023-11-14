import cn from "src/app/utils/ClassMerge";
import { ArrowRight } from "../icons";
import styles from "./Button.css";

export const Button = ({
  variant,
  text,
  arrow = true,
  className = "",
  borderRadius = "rounded-lg",
  onClick,
  textClassName = "",
  bgColor = "bg-gray-white",
  hoverColor = "hover:bg-[#33557D]",
  clickedColor = "active:bg-[#33557D]",
  textColor = "text-gray-black",
  textHoverColor = "group-hover:text-gray-white",
  textClickedColor = "group-active:text-gray-white",
  arrowFill = "fill-gray-black",
}) => {
  switch (variant) {
    case "primary":
      bgColor = "bg-primary";
      hoverColor = "hover:bg-[#33557D]";
      clickedColor = "active:bg-[#33557D]";
      break;
    case "header":
      bgColor = "bg-transparent";
      hoverColor = "hover:bg-gray-3";
      clickedColor = "active:bg-transparent";
      textColor = "text-gray-4";
      textHoverColor = "group-hover:text-gray-white";
      textClickedColor = "group-active:text-gray-white";
      arrowFill = "fill-gray-4";
      break;
    case "secondary":
      bgColor = "bg-gray-white";
      hoverColor = "hover:bg-gray-4";
      clickedColor = "active:bg-gray-4";
      textColor = "text-gray-black";
      textHoverColor = "group-hover:text-gray-black";
      textClickedColor = "group-active:text-gray-black";
      arrowFill = "fill-gray-black";
      break;
    case "secondary-gray":
      bgColor = "bg-gray-2";
      hoverColor = "hover:bg-gray-4";
      clickedColor = "active:bg-gray-3";
      textColor = "text-gray-white";
      textHoverColor = "group-hover:text-gray-white";
      textClickedColor = "group-active:text-gray-white";
      arrowFill = "fill-gray-white";
      break;
  }
  return (
    <button
      className={cn(
        "group inline-flex min-w-[60px] px-sm py-xxs justify-center items-center gap-xxs ",
        borderRadius,
        bgColor,
        hoverColor,
        clickedColor,
        className
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "flex-1 text-sm-regular text-center",
          textColor,
          textHoverColor,
          textClickedColor,
          textClassName
        )}
      >
        {text}
      </span>
      {arrow && <ArrowRight fill={arrowFill} />}
    </button>
  );
};
