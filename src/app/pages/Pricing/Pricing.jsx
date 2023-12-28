import { Page } from "src/app/old_components/Page/Page";
import PricingCard from "./components/PricingCard/PricingCard";
import { Button } from "src/app/old_components/Button";
import { PricingTable } from "./components/PricingTable/PricingTable";
import { ArrowRight } from "src/app/old_components/icons";
export function Pricing() {
  const cards = [
    {
      title: "Flex 8k",
      description:
        "Usage-based plan with a 8k context window, ideal for most AI applications.",
      price: "$0.02",
      priceDescription: (
        <span className="text-md-regular text-gray-4">
          {"First "}
          <span className="text-md-rmedium text-gray-white">40K</span>
          {" tokens free"}
        </span>
      ),
      featureTitle: "Flex 8k plan features:",
      button: (
        <Button
          variant={"secondary"}
          text={"Start free trial"}
          arrow={false}
          className="self-stretch"
        />
      ),
      currentPlan: "View Usage Details",
      // upgradeButton: {
      //   text: 'Add subscription',
      //   className: 'button-primary self-stretch',
      //   onClick: () => {
      //     if (!user.email) navigate('/signup?next=/platform/pricing');
      //     else {
      //       createPaymentSession({
      //         lookup_keys: [
      //           'keywordsai_flex_8k_input',
      //           'keywordsai_flex_8k_output',
      //         ],
      //       });
      //     }
      //   },
      // },
      // downgradeButton: {
      //   text: 'Add subscription',
      //   className: 'button-primary self-stretch',
      //   onClick: () => {
      //     if (!user.email) navigate('/signup?next=/platform/pricing');
      //     else {
      //       createPaymentSession({
      //         lookup_keys: [
      //           'keywordsai_flex_8k_input',
      //           'keywordsai_flex_8k_output',
      //         ],
      //       });
      //     }
      //   },
      // },
      features: [
        "40K free trial tokens",
        "8K context window",
        "$0.02 / 1K input tokens",
        "$0.04 / 1K output tokens",
        "Testing playground",
        "Email support",
      ],
      plan: "flex_8k",
      rank: 2,
    },
    {
      title: "Flex 32k",
      description:
        "Usage-based plan with a 32k context window, perfect for context-rich AI products.",
      price: "$0.04",
      priceDescription: (
        <span className="text-md-regular text-gray-4">
          {"First "}
          <span className="text-md-rmedium text-gray-white">40K</span>
          {" tokens free"}
        </span>
      ),
      featureTitle: "Flex 32k plan features:",
      currentPlan: "View Usage Details",
      button: (
        <Button
          variant={"secondary"}
          text={"Start free trial"}
          arrow={false}
          className="self-stretch"
        />
      ),
      // upgradeButton: {
      //   text: 'Add subscription',
      //   className: 'button-primary self-stretch',
      //   onClick: () => {
      //     if (!user.email) navigate('/signup?next=/platform/pricing');
      //     else {
      //       createPaymentSession({
      //         lookup_keys: [
      //           'keywordsai_flex_32k_input',
      //           'keywordsai_flex_32k_output',
      //         ],
      //       });
      //     }
      //   },
      // },
      // downgradeButton: {
      //   text: 'Add subscription',
      //   className: 'button-primary self-stretch',
      //   onClick: () => {
      //     if (!user.email) navigate('/signup?next=/platform/pricing');
      //     else {
      //       createPaymentSession({
      //         lookup_keys: [
      //           'keywordsai_flex_32k_input',
      //           'keywordsai_flex_32k_output',
      //         ],
      //       });
      //     }
      //   },
      // },
      features: [
        "40K free trial tokens",
        "32K context window",
        "$0.04 / 1K input tokens",
        "$0.08 / 1K output tokens",
        "Testing playground",
        "Email support",
      ],
      plan: "flex_32k",
      rank: 3,
    },
    {
      title: "Custom",
      description:
        "Design a custom package. For businesses with large volume or unique use cases.",
      featureTitle: "Custom plan features:",
      button: (
        <div className="flex self-stretch gradient-out p-[1px]">
          <button
            className={
              "button-secondary-black text-sm-regular text-center text-gray-white flex-1 self-stretch bg-gray-black"
            }
            // onClick={() => navigate('/platform/organization/usage')}
          >
            <span>{"Talk to us"}</span>
            <ArrowRight fill="fill-gray-white" />
          </button>
        </div>
      ),
      currentPlan: "View Usage Details",
      features: [
        "Volume discounts",
        "Custom usage plan",
        "Integration assistance",
        "Increased rate limit",
        "Testing playground",
        "CTO priority support",
      ],
      plan: "custom",
      rank: 4,
    },
  ];

  return (
    <Page>
      {/* upper container */}
      <div className="flex-col px-xxxl py-xxl pb-[240px] items-center gap-xl self-stretch">
        {/* section title */}
        <div className="flex-col max-w-[1000px] items-center gap-sm">
          <p className="display-lg text-center text-gray-white ">
            Plans and Pricing
          </p>
          <p className="text-lg text-center text-gray-4 ">
            Start for free and scale as you go.
          </p>
        </div>

        {/* pricing cards */}
        <div className="flex max-w-[1000px] items-start content-start gap-y-[24px] gap-x-[20px]  flex-wrap">
          {cards.map((card, index) => (
            <PricingCard {...card} key={index} />
          ))}
        </div>
        {/* pricing table */}
        <div className="flex-col max-w-[1000px] gap-sm w-full">
          <div className="display-sm">Compare Plans and Features</div>
          <PricingTable />
        </div>
      </div>
    </Page>
  );
}
