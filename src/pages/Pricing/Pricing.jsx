import { Page } from "src/components/Page/Page";
import PricingCard from "./components/PricingCard/PricingCard";
import { Button } from "src/components/Buttons";
import { PricingTable } from "./components/PricingTable/PricingTable";
import { ArrowRight } from "src/components/icons-old";
import { createPath, useNavigate } from "react-router-dom";
import SwitchButton from "src/components/Buttons/SwitchButton";
import { useState } from "react";
import { createPaymentSession } from "src/services/stripe";
import { set } from "react-hook-form";
import { models } from "src/utilities/constants";
import PricingSwtichButton from "./components/PricingSwtichButton";
export function Pricing() {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);
  const [teamPrice, setTeamPrice] = useState("$79");
  const [bonus, setBonus] = useState("Billed annually");

  const handleSwitchChange = (checked) => {
    setIsYearly(checked);
    setTeamPrice(checked ? "$79 " : "$99");
    setBonus(checked ? "Billed annually" : "Billed monthly");
  };
  const remaining = models.length;
  const cards = [
    {
      title: "Starter",
      description: "Best for solo builders.",
      price: "$0",
      featureTitle: "Starter plan features:",
      bonus: "Free forever",
      button: (
        <Button
          variant={"r4-black"}
          text={"Get started free"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={() =>
            (window.location.href =
              "https://platform.keywordsai.co/login") // should direct to the pricing page in the platform later
          }
          type="button"
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        "10k requests / month",
        "2 seats",
        // "1 proxy API key",
        "Community support",
        // "Status monitoring",
        // "Dynamic LLM router",
        // "OpenAI models",
        // "Email support",
      ],
      plan: "starter",
      rank: 2,
    },
    {
      title: "Pro",
      description: "Best for early stage startups.",
      price: teamPrice,
      bonus: bonus,
      featureTitle: "Everything in Starter, plus",
      currentPlan: "View Usage Details",
      bgColor: "bg-gray-2",
      border: "shadow-gray-4 shadow-border",
      button: (
        <Button
          variant={"r4-white"}
          text={"Get started"}
          bgColor="bg-gray-white"
          textColor="text-gray-black"
          className="self-stretch items-center justify-center gap-xxs"
          width="w-full"
          onClick={() =>
            (window.location.href =
              "https://platform.keywordsai.co/login") // should direct to the pricing page in the platform later
          }
          type="button"
        />
      ),

      features: [
        "1M requests / month",
        "5 seats",
        "Custom evaluations",
        "Founders 24/7 support",
        // "Admin roles",
        // "Advanced model fallback",
        // `Mistral, Anthropic, and ${remaining} more models`,
        // "CTO priority support",
      ],
      plan: "flex_32k",
      rank: 3,
    },
    {
      title: "Team",
      description: "Best for high-growth teams.",
      price: "$499",
      bonus: "Billed annually",
      featureTitle: "Everything in Pro, plus",
      button: (
        <Button
          variant={"r4-black"}
          text={"Talk to founders"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={() => (window.open  ("https://zcal.co/keywords-ai", "_blank"))}
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        "Unlimited request",
        "Unlimited seats",
        "Fine-tuning",
        "Increased rate limit",
        "SOC 2 compliance",
      ],
      plan: "custom",
      rank: 4,
    },
  ];

  return (
    <Page>
      {/* upper container */}
      <div className="flex-col px-xl py-xl pb-[240px] items-center gap-xl self-stretch">
        {/* section title */}
        <div className="flex flex-col max-w-[1000px] items-center gap-lg">
          <p className="display-xl text-center text-gray-white ">
            Plans and Pricing
          </p>
          <p className="text-lg text-center text-gray-4 ">
          Start for free and scale as you go. 
          </p>
        </div>

        {/* pricing cards */}
        <div className="flex-col items-center gap-lg">
          <div className="flex justify-center items-center gap-sm">
            <span className="text-lg text-gray-4 text-center"> Monthly </span>
            <div className=" ">
              <SwitchButton
                onCheckedChange={handleSwitchChange}
                checked={isYearly}
              />
            </div>
            <div>
              <span className="text-lg text-gray-4 text-center"> Yearly </span>
              <span className="text-lg text-primary text-center">
                {" "}
                (20% off){" "}
              </span>
            </div>
          </div>
          <div className="flex max-w-[1000px] items-start content-start gap-y-[24px] gap-x-[20px]  flex-wrap">
            {cards.map((card, index) => (
              <PricingCard {...card} key={index} />
            ))}
          </div>
        </div>
        {/* pricing table */}
        {/* <div className="flex-col max-w-[1000px] gap-sm w-full">
          <div className="display-sm">Compare Plans and Features</div>
          <PricingTable />
        </div> */}
      </div>
    </Page>
  );
}
