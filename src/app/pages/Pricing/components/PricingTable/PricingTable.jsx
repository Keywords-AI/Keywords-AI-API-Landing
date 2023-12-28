import { Check } from "src/app/old_components/icons";
import "./PricingTable.css";
export function PricingTable() {
  const plans = [
    { name: "Flex 8k", key: "f8k" },
    { name: "Flex 32k", key: "f32k" },
    { name: "Custom", key: "custom" },
  ];

  const features = [
    {
      title: "Free trial tokens",
      f8K: "40k",
      f32K: "40k",
      custom: "-",
    },
    {
      title: "Context window",
      f8K: "8k",
      f32K: "32k",
      custom: "Up tp 32k",
    },
    {
      title: "input tokens",
      f8K: (
        <div className="flex-row">
          {"$0.02"}
          <span className="text-gray-4">&nbsp;{"/ 1k tokens"}</span>
        </div>
      ),
      f32K: (
        <div className="flex-row">
          {"$0.04"}
          <span className="text-gray-4">&nbsp;{"/ 1k tokens"}</span>
        </div>
      ),
      custom: "-",
    },
    {
      title: "output tokens",
      f8K: (
        <div className="flex-row">
          {"$0.04"}
          <span className="text-gray-4">&nbsp;{"/ 1k tokens"}</span>
        </div>
      ),
      f32K: (
        <div className="flex-row">
          {"$0.08"}
          <span className="text-gray-4">&nbsp;{"/ 1k tokens"}</span>
        </div>
      ),
      custom: "-",
    },
    {
      title: "Cost reduction vs GPT-4",
      f8K: "33%",
      f32K: "33%",
      custom: "Up to 40%",
    },
    {
      title: "Usage limit",
      f8K: "Unlimited",
      f32K: "Unlimited",
      custom: "Unlimited",
    },
    {
      title: "Rate limit",
      f8K: (
        <div className="flex-row">
          <span>{"40K tokens "}</span>
          <span className="text-gray-4">&nbsp;{"/ min"}</span>
        </div>
      ),
      f32K: (
        <div className="flex-row">
          <span>{"40K tokens "}</span>
          <span className="text-gray-4">&nbsp;{"/ min"}</span>
        </div>
      ),
      Custom: (
        <div className="flex-row">
          <span>{"Up to 120K tokens "}</span>
          <span className="text-gray-4">&nbsp;{"/ min"}</span>
        </div>
      ),
    },
    {
      title: "API keys",
      f8K: "Unlimited",
      f32K: "Unlimited",
      custom: "Unlimited",
    },
    {
      title: "Users",
      f8K: "Unlimited",
      f32K: "Unlimited",
      custom: "Unlimited",
    },
    {
      title: "OpenAI-style integration",
      f8K: <Check />,
      f32K: <Check />,
      custom: <Check />,
    },
    {
      title: "Usage tracking",
      f8K: <Check />,
      f32K: <Check />,
      custom: <Check />,
    },
    {
      title: "Priority support",
      f8K: <Check />,
      f32K: <Check />,
      custom: <Check />,
    },
  ];

  return (
    <table className="w-full max-w-[1200px] self-stretch  border-collapse">
      <thead className="border-collapse">
        <tr className="h-[60px] grid grid-cols-4 border-b border-gray-3">
          <th></th>
          {plans.map((plan, index) => (
            <th
              className="border-collapse display-xs flex justify-center items-center flex-1 self-stretch"
              key={index}
            >
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-collapse">
        {features.map((feature, index) => (
          <tr
            key={index}
            className="h-[60px] grid grid-cols-4 border-b border-gray-3"
          >
            {Object.keys(feature).map((key, subIndex) => {
              if (key !== "title") {
                return (
                  <td
                    className="text-md-regular flex items-center self-stretch justify-center"
                    key={subIndex}
                  >
                    {feature[key]}
                  </td>
                );
              } else {
                return (
                  <td
                    className="text-md-medium flex items-center self-stretch flex-1 border-r border-gray-3"
                    key={subIndex}
                  >
                    {feature.title}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
