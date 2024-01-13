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
export function Pricing() {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(true);
  const [teamPrice, setTeamPrice] = useState("$29");
  const [bonus, setBonus] = useState("Billed annually");

  const handleSwitchChange = (checked) => {
    setIsYearly(checked);
    setTeamPrice(checked ? "$29 " : "$39");
    setBonus(checked ? "Billed annually" : "Billed monthly");
  };

  const cards = [
    {
      title: "Free",
      description:
        "Best for solo builders.",
      price: "$0",
      featureTitle: "Free plan features:",
      button: (
        <Button
          variant={"r4-black"}
          text={"Try for free"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={() => window.location.href = 'https://platform.keywordsai.co/login?next=platform/api/plans'}
          type="button"
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        "10,000 API requests",
        "1 developer seat",
        "1 proxy API key",
        "Usage analytics",
        "Status monitoring",
        "Dynamic LLM router",
        "OpenAI credits support",
        "Email support", 
      ],
      plan: "starter",
      rank: 2,
    },
    {
      title: "Team",
      description:
        "Best for startups and teams.",
      price: teamPrice,
      bonus: bonus,
      featureTitle: "Everything in Free, plus",
      currentPlan: "View Usage Details",
      bgColor: "bg-gray-2",
      border: "shadow-gray-4 shadow-border",
      button: (
        <Button
          variant={"r4-primary"}
          text={"Get started"}
          className="self-stretch items-center justify-center gap-xxs"
          width="w-full"
          onClick={() => window.location.href = 'https://platform.keywordsai.co/login?next=platform/api/plans'}
          type="button"
        />
      ),

      features: [
        "Unlimited API requests",
        "Unlimited seats ",
        "Unlimited proxy keys",
        "Advanced usage analytics",
        "Advanced model fallback",
        "Priority model access",
        "Admin roles",
        "CTO priority support"
      ],
      plan: "flex_32k",
      rank: 3,
    },
    {
      title: "Custom",
      description:
        "Fully tailored for your use case.",
      featureTitle: "Everything in Team, plus",
      button: (<Button
          variant={"r4-black"}
          text={"Book a demo"}
          className="self-stretch shadow-border shadow-gray-3 rounded-sm bg-gray-2"
          onClick={() => window.location.href = 'https://zcal.co/keywords-ai'}
        />
      ),
      currentPlan: "View Usage Details",
      features: [
        "Testing playground",
        "Integration assistance",
        "Use-case optimization",
        "Increased rate limit",
        "Volume discount",
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
        <div className="flex-col max-w-[1000px] items-center gap-sm">
          <p className="display-lg text-center text-gray-white ">
            Plans and Pricing
          </p>
          <p className="text-lg text-center text-gray-4 ">
          Start for free and scale as you go. Upgrade to enable unlimited requests, and additional features.
          </p>
        </div>

        {/* pricing cards */}
        <div className="flex-col items-center gap-lg">
          <div className="flex justify-center items-center gap-sm">
            <span className="text-lg text-gray-4 text-center"> Monthly </span>
            <div className=" ">
            <SwitchButton onCheckedChange={handleSwitchChange} checked={isYearly}/>
            </div>
            <div>
              <span className="text-lg text-gray-4 text-center"> Yearly </span>
              <span className="text-lg text-primary text-center"> (35% off) </span>
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
