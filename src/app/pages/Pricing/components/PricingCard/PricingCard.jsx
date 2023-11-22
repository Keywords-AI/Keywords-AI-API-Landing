import "./PricingCard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { FeatureTick } from "src/app/components/icons";

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
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-in flex-1 h-[720px] min-w-[280px] p-[24px] flex-col items-center gap-xl  rounded-xl border border-solid border-gray-3">
      <div className=" flex-col self-stretch gap-xs justify-between h-[288px]">
        {/* title and descrtion */}
        <div className="flex-col justify-start items-start gap-xs self-stretch flex-1  ">
          <div className="display-sm text-gray-white">{title}</div>
          <div className="text-md-regular text-gray-4">{description}</div>
        </div>
        {/* main feature and button */}
        <div className="flex flex-col items-start gap-lg self-stretch justify-between">
          {price && (
            <div className="flex-col items-start self-stretch ">
              <div>
                <span className="display-sm text-gray-white">{price}</span>
                <span className="text-md-regular text-gray-4">
                  {" / 1K input tokens"}
                </span>
              </div>
              <p>{priceDescription}</p>
            </div>
          )}
          {button}
        </div>
      </div>

      {/* all features */}
      <div className="flex-col items-start gap-md self-stretch">
        <div className="text-md-medium">{featureTitle}</div>
        <div className="flex-col gap-xs items-center self-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-row justify-start items-center gap-xs self-stretch"
              style={{
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  height: "16px",
                  width: "16px",
                  flexShrink: 0,
                }}
              >
                <FeatureTick />
              </div>
              <div className="text-md-regular text-gray-white">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
