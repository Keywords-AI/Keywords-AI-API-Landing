import "./PricingCard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { FeatureTick } from "src/components/icons-old";
import { Button } from "src/components/Buttons";
import cn from "src/utilities/ClassMerge";

const ranking = {
  flex_8k: 1,
  flex_32k: 2,
  pro: 3,
};

export default function PricingCard({
  price,
  plan = "plan",
  title = "Title",
  description = "Description Here",
  featureTitle = "Here are the features",
  buttonVar = "r4-primary",
  buttonText = "Try for free",
  bgColor = "bg-gray-1",
  border = "shadow-gray-3 shadow-border",
  priceDescription = "Price Description",
  currentPlan = "Current Plan",
  button = {
    text: "Choose This",
    className: "button-tertiary-white button-fill",
    icon: null,
  },
  upgradeButton = {
    text: "Get Started",
    className: " button-fill",
  },
  downgradeButton = {
    text: "Talk to us",
    className: "button-secondary-black self-stretch",
    icon: null,
    onClick: () => {
      window.open(
        "https://airtable.com/app5rlVP01ZZNXurS/shrEyS6G8lAoLX0E3",
        "_blank"
      );
    },
  },
  features = ["feature 1", "feature 2"],
}) {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "flex h-[720px] p-md flex-col items-center gap-xl flex-1 w-ful rounded-md min-w-[280px]",
        border,
        bgColor,
        hover && "shadow-pricing",
      )}
      
    >
      <div className="flex flex-col items-start justify-center gap-xxs self-stretch">
        <span className="self-stretch display-sm"> {title}</span>
        <span className="text-md-regular self-stretch text-gray-4">
          {" "}
          {description}{" "}
        </span>
      </div>
      <div className="flex flex-col items-center gap-lg self-stretch">
        <div className="flex flex-col h-[56px] items-start self-stretch">
          {price && (
            <div className="flex items-end gap-xxs">
              <span className="display-sm"> {price} </span>
              <span className="text-sm-regular text-gray-4 py-[2px]">
                {" "}
                / month{" "}
              </span>
            </div>
          )}
          {price && <span className="text-md-regular text-gray-4">//</span>}
        </div>
        {/* <Button variant={buttonVar} text={buttonText} width="w-full" className="self-stretch items-center justify-center gap-xxs" /> */}
        {button}
      </div>

      <div className="flex flex-col items-start gap-md self-stretch">
        <span className="text-md-md "> {featureTitle} </span>
        <div className="flex flex-col items-start gap-xs">
          {features.map((feature, index) => (
            <div className="flex items-center gap-xs" key={index}>
              <FeatureTick />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
