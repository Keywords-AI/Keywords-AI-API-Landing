import "./Button.css";
import { forwardRef } from "react";
import React from "react";
import useForwardRef from "src/hooks/useForwardRef";
import cn from "src/utilities/ClassMerge";

/**
 * `Button` Component
 *
 * Renders a button with various styling options.
 *
 * @component
 * @example
 * <Button
 *   variant="primary"
 *   text="Click Me"
 *   onClick={() => console.log('Clicked!')}
 * />
 * na
 * @param {string} props.active - The state of the button. If true, the button will be displayed as active.
 * @param {string} props.variant - The variant of the button. Options include "primary", "header", "secondary", "secondary-gray", "secondary-black", "beta".
 * @param {string} props.text - The text displayed on the button.
 * @param {React.Element} [props.icon=null] - Icon component to be displayed on the button.
 * @param {string} [props.className=""] - Additional CSS classes for the button.
 * @param {string} [props.borderRadius="rounded-lg"] - The border radius of the button.
 * @param {Function} [props.onClick] - Function to call on button click.
 * @param {string} [props.textClassName="text-sm-regular"] - Additional CSS classes for the text on the button.
 * @param {string} [props.bgColor="bg-gray-white"] - The background color of the button.
 * @param {string} [props.hoverColor="hover:bg-[#33557D]"] - The hover background color of the button.
 * @param {string} [props.clickedColor="active:bg-[#33557D]"] - The background color of the button when clicked.
 * @param {string} [props.textColor="text-gray-black"] - The text color of the button.
 * @param {string} [props.textHoverColor="group-hover:text-gray-white"] - The text color of the button on hover.
 * @param {string} [props.textClickedColor="group-active:text-gray-white"] - The text color of the button when clicked.
 * @param {string} [props.iconFill="fill-gray-black"] - The fill color of the icon in the button.
 * @param {string} [props.iconHoverFill="fill-gray-white"] - The hover fill color of the icon in the button.
 * @param {string} [props.iconPosition="right"] - The direction of the icon in the button. Options are "right" or "left".
 * @param {string} [props.padding="py-xxs px-xs"] - The padding of the button.
 * @param {string} [props.borderColor="border-transparent"] - The border color of the button.
 * @param {string} [props.borderHoverColor="hover:border-transparent"] - The border color of the button on hover.
 * @param {string} [props.borderClickedColor="active:border-transparent"] - The border color of the button when clicked.
 * @param {string} [props.justification="justify-center"] - The justification of the button. Options are "justify-center" or "justify-start".
 * @param {React.Element} [props.children=null] - The children of the button. Custom children will override the text and icon props.
 * @param {string} [props.width=""] - The width of the button.
 */

export const Button = forwardRef(
  (
    {
      active = false,
      variant,
      text,
      type,
      icon,
      className,
      borderRadius,
      onClick,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      textClassName,
      bgColor,
      hoverColor,
      clickedColor,
      textColor,
      textHoverColor,
      textClickedColor,
      iconFill,
      iconHoverFill,
      iconPosition,
      iconSize,
      padding,
      borderColor,
      borderHoverColor,
      borderClickedColor,
      justification,
      width = "",
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const reference = useForwardRef(ref);
    const [hover, setHover] = React.useState(false);
    switch (variant) {
      case "secondary":
        iconPosition = iconPosition || "left";
        bgColor = bgColor || "bg-gray-white";
        hoverColor = hoverColor || "bg-gray-4";
        clickedColor = clickedColor || "bg-gray-4";
        textColor = textColor || "text-gray-black";
        textHoverColor = textHoverColor || "text-gray-black";
        textClickedColor = textClickedColor || "text-gray-black";
        iconFill = iconFill || "fill-gray-black";
        break;
      case "secondary-gray":
        bgColor = bgColor || "bg-gray-2";
        hoverColor = hoverColor || "bg-gray-4";
        clickedColor = clickedColor || "bg-gray-3";
        textColor = textColor || "text-gray-white";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        iconFill = iconFill || "fill-gray-white";
        break;
      case "secondary-black":
        bgColor = bgColor || "bg-gray-black";
        hoverColor = hoverColor || "bg-gray-2";
        clickedColor = clickedColor || "bg-gray-2";
        textColor = textColor || "text-gray-white";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        iconFill = iconFill || "fill-gray-white";
        className = cn(className, "shadow-border");
        break;
      case "beta":
        bgColor = bgColor || "bg-gradient-in";
        textColor = textColor || "text-gray-white";
        hoverColor = hoverColor || "bg-gradient-in";
        clickedColor = clickedColor || "black-gradient";
        borderRadius = borderRadius || "rounded-lg";
        padding = padding || "py-xxs px-sm";
        className = cn(
          className,
          "cursor-default gradient-in max-h-[36px] tracking-[0.56px]"
        );
        break;
      case "r4-white":
        iconPosition = iconPosition || "right";
        bgColor = bgColor || "bg-gray-white";
        textClassName = textClassName || "text-sm-md";
        hoverColor = hoverColor || "bg-gray-4";
        clickedColor = clickedColor || "bg-gray-4";
        textColor = textColor || "text-gray-black";
        textHoverColor = textHoverColor || "text-gray-black";
        textClickedColor = textClickedColor || "text-gray-black";
        borderRadius = borderRadius || "rounded-sm";
        padding = padding || "py-xxs px-xs";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent"; //border-gray-4

        break;
      // case "r4-gray-2":
      //   iconPosition = iconPosition || "right";
      //   bgColor = bgColor || "bg-gray-2";
      //   hoverColor = hoverColor || "bg-gray-3";
      //   clickedColor = clickedColor || "bg-gray-2";
      //   textColor = textColor || "text-gray-4";
      //   textHoverColor = textHoverColor || "text-gray-white";
      //   textClickedColor = textClickedColor || "text-gray-white";
      //   borderRadius = borderRadius || "rounded-sm";
      //   borderColor = borderColor || "shadow-border";
      //   borderHoverColor = borderHoverColor || "shadow-transparent";
      //   padding = padding || "py-xxs px-xs";
      //   textClassName = textClassName || "text-sm-md";

      //   break;
      case "r4-primary":
        bgColor = bgColor || "bg-primary";
        hoverColor = hoverColor || "bg-primary-2";
        clickedColor = clickedColor || "bg-primary";
        textColor = textColor || "text-gray-white";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        padding = padding || "py-xxs px-xs";
        textClassName = textClassName || "text-sm-md";

        break;
      case "r4-red":
        bgColor = bgColor || "bg-gray-2";
        hoverColor = hoverColor || "bg-error";
        clickedColor = clickedColor || "bg-error";
        textColor = textColor || "text-error";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "shadow-error shadow-border";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        padding = padding || "py-xxs px-xs";
        textClassName = textClassName || "text-sm-md";

        break;
      case "r4-gray-2":
        iconPosition = iconPosition || "right";
        bgColor = bgColor || "bg-gray-2";
        hoverColor = hoverColor || "bg-gray-2";
        textClassName = textClassName || "text-sm-md";
        clickedColor = clickedColor || "bg-gray-2";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-4";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "border-transparent";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-3";
        borderClickedColor =
          borderClickedColor || "shadow-border shadow-gray-4";
        padding = padding || "py-xxs px-xs";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-4";
        justification = justification || "justify-start";

        break;

      case "r4-black":
        iconPosition = iconPosition || "right";
        bgColor = bgColor || "bg-gray-1";
        hoverColor = hoverColor || "bg-gray-2";
        textClassName = textClassName || "text-sm-md";
        clickedColor = clickedColor || "bg-gray-2";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-4";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "border-transparent";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-3";
        borderClickedColor =
          borderClickedColor || "shadow-border shadow-gray-4";
        padding = padding || "py-xxs px-xs";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-4";
        justification = justification || "justify-center";

        break;
      case "text":
        iconPosition = iconPosition || "left";
        bgColor = bgColor || "bg-transparent";
        hoverColor = hoverColor || "bg-transparent";
        clickedColor = clickedColor || "bg-transparent";
        textClassName = textClassName || "text-sm-md";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        padding = padding || "py-xxs px-xs";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        justification = justification || "justify-start";

        break;
      case "small":
        bgColor = bgColor || "bg-gray-2";
        hoverColor = hoverColor || "bg-gray-2";
        clickedColor = clickedColor || "bg-gray-2";
        textColor = textColor || "text-gray-4";
        iconPosition = iconPosition || "left";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "shadow-border shadow-gray-3";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-4";
        padding = padding || "py-xxxs px-xxs";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        textClassName = "text-sm-md";

        break;
      case "r18-white":
        bgColor = bgColor || "bg-gray-white";
        hoverColor = hoverColor || "bg-gray-black";
        clickedColor = clickedColor || "bg-gray-black";
        textColor = textColor || "text-gray-black";
        textClassName = textClassName || "text-sm-regular";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-lg";
        padding = padding || "py-xxs px-sm";
        iconFill = iconFill || "fill-gray-black";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-4";

        break;
      case "big-white":
        bgColor = bgColor || "bg-gray-white";
        hoverColor = hoverColor || "bg-gray-black";
        clickedColor = clickedColor || "bg-gray-black";
        textColor = textColor || "text-gray-black";
        textClassName = textClassName || "text-md-medium";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-[400px]";
        padding = padding || "py-xs px-md";
        iconFill = iconFill || "fill-gray-black";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-4";

        break;
      case "r18-black":
        bgColor = bgColor || "bg-gray-black";
        hoverColor = hoverColor || "bg-gray-3";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        clickedColor = clickedColor || "bg-gray-3";
        textClassName = textClassName || "text-sm-regular";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-lg";
        padding = padding || "py-xxs px-sm";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-white";

        break;
      case "big-black":
        bgColor = bgColor || "bg-gray-black";
        hoverColor = hoverColor || "bg-gray-3";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        clickedColor = clickedColor || "bg-gray-3";
        textClassName = textClassName || "text-md-medium ";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-[400px]";
        padding = padding || "py-xs px-md";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-white";

        break;
      case "header":
        bgColor = bgColor || "bg-transparent";
        textClassName = textClassName || "text-sm-regular";
        hoverColor = hoverColor || "";
        clickedColor = clickedColor || "";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        padding = padding || "py-xxs px-xs";

        break;
      case "footer":
        bgColor = bgColor || "bg-transparent";
        textClassName = textClassName || "caption";
        hoverColor = hoverColor || "";

        clickedColor = clickedColor || "";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        padding = padding || "py-xxs px-xs";

        break;
      case "panel":
        bgColor = bgColor || "bg-transparent";
        textClassName = textClassName || "text-sm-md";
        borderColor = borderColor || "shadow-tranparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";
        hoverColor = hoverColor || "bg-gray-3";
        clickedColor = clickedColor || "bg-gray-3";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        padding = padding || "py-xxs px-xs";
        iconFill = iconFill || "fill-gray-4";
        iconPosition = iconPosition || "left";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        justification = justification || "justify-start";
        width = width || "w-full self-stretch";
        iconSize = iconSize || "md";

        break;

      case "careers":
        bgColor = bgColor || "bg-transparent";
        textClassName = textClassName || "text-md-md";
        hoverColor = hoverColor || "";
        clickedColor = clickedColor || "";
        iconPosition = iconPosition || "right";
        textColor = textColor || "text-primary";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        padding = padding || "py-xxs px-xs";
        iconFill = iconFill || "fill-primary";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        borderColor = borderColor || "shadow-transparent";
        borderHoverColor = borderHoverColor || "shadow-transparent";

        break;
      case "chat":
        bgColor = bgColor || "bg-gray-2";
        textClassName = textClassName || "text-sm-regular";
        hoverColor = hoverColor || "bg-gray-2";
        clickedColor = clickedColor || "bg-gray-black";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderColor = borderColor || "shadow-border shadow-gray-3";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-4";
        borderRadius = borderRadius || "rounded-sm";
        padding = padding || "py-xxs px-xs";
        justification = justification || "justify-center";
        className = className || "w-[256px]";
        iconHoverFill = iconHoverFill || "fill-gray-white";

        break;
      case "icon":
        bgColor = bgColor || "bg-gray-2";
        hoverColor = hoverColor || "bg-gray-2";
        clickedColor = clickedColor || "bg-gray-2";
        textColor = textColor || "text-gray-4";
        textHoverColor = textHoverColor || "text-gray-white";
        textClickedColor = textClickedColor || "text-gray-white";
        borderRadius = borderRadius || "rounded-sm";
        borderColor = borderColor || "shadow-border shadow-gray-3";
        borderHoverColor = borderHoverColor || "shadow-border shadow-gray-4";
        padding = padding || "py-xxs px-xxs";
        iconFill = iconFill || "fill-gray-4";
        iconHoverFill = iconHoverFill || "fill-gray-white";
        justification = justification || "justify-center";
        width = width || "";
        className = "w-[28px] h-[28px]";

        break;
      default:
        <div className="bg-error">Invalid Variant</div>;
    }
    if (active) {
      bgColor = clickedColor;
      textColor = textClickedColor;
      borderColor = borderClickedColor || borderHoverColor;
      iconFill = iconHoverFill;
    }
    return (
      <button
        type={type || "submit"}
        aria-label={"button-" + variant}
        ref={reference}
        {...props}
        onMouseEnter={() => {
          onMouseEnter();
          setHover(true);
        }}
        onMouseLeave={() => {
          onMouseLeave();
          setHover(false);
        }}
        className={cn(
          "group inline-flex items-center gap-xxs",
          width,
          justification,
          borderRadius,
          hover && !active ? hoverColor : bgColor,
          className,
          padding,
          hover && !active ? borderHoverColor : borderColor,
          "text-center",
          textClassName
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children ? (
          <>{children}</>
        ) : (
          <>
            {text && (
              <span className={cn(hover ? textHoverColor : textColor)}>
                {text}
              </span>
            )}
            {icon && (
              <div
                className={cn(
                  "flex justify-center items-center ",
                  iconPosition === "left" ? "order-first" : "order-last"
                )}
              >
                {React.createElement(icon, {
                  fill: iconFill,
                  activeFill: iconHoverFill,
                  active: hover,
                  size: iconSize,
                })}
              </div>
            )}
          </>
        )}
      </button>
    );
  }
);
