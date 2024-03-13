import React, { ForwardedRef } from "react";
import * as Switch from "@radix-ui/react-switch";
import cn from "src/utilities/ClassMerge";

interface SwitchButtonProps {
  label?: string;
  checked?: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  leftValue?: string;
  rightValue?: string;
}

const TextSwitchButton = React.forwardRef(
  (
    {
      label,
      checked,
      onCheckedChange,
      disabled = false,
      name,
      value,
      onChange,
      leftValue = "false",
      rightValue = "true",
      className,
    }: SwitchButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <div className="flex-col h-fit">
        {label && <label className="">{label}</label>}
        <Switch.Root
          className={cn(
            "w-[164px] h-[28px] bg-transparent  rounded-lg relative outline-none cursor-pointer outline-1 outline outline-gray-3",
            className
          )}
          disabled={disabled}
          checked={checked}
          onCheckedChange={onCheckedChange}
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
        >
          <div className="flex gap-[28px] w-full self-stretch flex-1 h-[28px] justify-center items-center">
            <p
              className={cn(
                "text-center text-sm-regular",
                checked ? "text-gray-4" : "text-gray-white"
              )}
            >
              {leftValue}
            </p>
            <p
              className={cn(
                "text-center text-sm-regular",
                checked ? "text-gray-white" : "text-gray-4"
              )}
            >
              {rightValue}
            </p>
          </div>
          <Switch.Thumb className="block w-[82px] h-[28px]  bg-transparent rounded-lg  transition-transform duration-100  translate-y-[-28px] will-change-transform data-[state=checked]:translate-x-[82px] outline-1 outline outline-gray-4" />
        </Switch.Root>
      </div>
    );
  }
);

export default TextSwitchButton;
