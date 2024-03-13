import { Check } from "src/components/icons-old";
import "./PricingTable.css";
import { Button } from "src/components/Buttons";
import { FeatureTick } from "src/components/Icons";
export function PricingTable() {
  const plans = [
    { name: "Starter", key: "starter" },
    { name: "Pro", key: "pro" },
    { name: "Team", key: "team" },
  ];
  const titleByCol = [
    {
      section: "Infrastructure",
      requests: "Requests",
      endpoints: "Unified endpoint",
      proxy: "Proxy keys",
      async: "Async logging",
      load_balancing: "Load balancing",
      request_entries: "Request entries",
      fallback: "Model fallback",
      self_hosted: "Self-hosting",
    },
    {
      section: "Platform",
      seats: "Seats",
      dashboard: "Dashboard",
      playground: "Multi-model playground",
      analytics: "User analytics",
      webhooks: "Webhook",
      classification: "Topic classification",
      eval: "Custom evaluations",
      manual_cache: "Manual caching",
      semantic_cache: "Semantic caching",
      prompt_opt: "Prompt optimization",
      prompt_management: "Prompt management",
      fine_tuning: "Fine-tuning",
    },
    {
      section: "Security",
      role: "Admin roles",
      dpa: "DPA",
      soc2: "SOC-2 compliance",
      saml: "SAML",
      sso: "Single Sign-On",
      pii: "PII removal",
    },
    {
      section: "Compatibility",
      openai: "OpenAI compatible",
      langchain: "LangChain compatible",
      LlamaIndex: "LlamaIndex compatible",
    },
    {
      section: "Support",
      priority: "Support",
      white_glove: "White-glove integration",
      sla: "SLA",
      pii: "PII removal",
    },

    {
      section: "Data",
      retention: "Data retention",
      json: "Dataset collection",
    },
  ];

  const starterByCol = [
    {
      section: "Infrastructure",
      requests: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"10k logs free"}</span>
        </div>
      ),
      endpoints: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"All models (100+)"}</span>
        </div>
      ),
      proxy: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"1"}</span>
        </div>
      ),
      async: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      load_balancing: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),

      request_entries: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      fallback: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      self_hosted: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },
    {
      section: "Platform",
      seats: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"2 seats"}</span>
        </div>
      ),
      dashboard: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      playground: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      analytics: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      webhooks: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      classification: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      eval: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),

      manual_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      semantic_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      prompt_opt: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      prompt_management: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),

      fine_tuning: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },
    {
      section: "Security",
      role: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      dpa: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      soc2: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      saml: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      sso: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },

    {
      section: "Compatibility",
      openai: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
        </div>
      ),
      langchain: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-gray-4" />
        </div>
      ),
      LlamaIndex: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-gray-4" />
        </div>
      ),
    },

    {
      section: "Support",
      priority: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"Community"}</span>
        </div>
      ),
      white_glove: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      sla: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },

    {
      section: "Data",
      retention: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"7 days"}</span>
        </div>
      ),
      json: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-gray-4" />
          <span className="text-gray-4">&nbsp;{"JSON & CSV export"}</span>
        </div>
      ),
    },
  ];

  const proByCol = [
    {
      section: "Infrastructure",
      requests: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"1M logs free"}</span>
        </div>
      ),
      endpoints: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"All models (100+)"}</span>
        </div>
      ),
      proxy: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"10"}</span>
        </div>
      ),
      async: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      load_balancing: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),

      request_entries: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      fallback: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      self_hosted: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },
    {
      section: "Platform",
      seats: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"5 seats"}</span>
        </div>
      ),
      dashboard: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      playground: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      analytics: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      webhooks: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      classification: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      eval: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),

      manual_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      semantic_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      prompt_opt: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      prompt_management: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),

      fine_tuning: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },
    {
      section: "Security",
      role: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      dpa: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      soc2: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      saml: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      sso: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },

    {
      section: "Compatibility",
      openai: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      langchain: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      LlamaIndex: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },

    {
      section: "Support",
      priority: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"Priority email"}</span>
        </div>
      ),
      white_glove: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      sla: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2"></div>
      ),
    },

    {
      section: "Data",
      retention: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"60 days"}</span>
        </div>
      ),
      json: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"JSON & CSV export"}</span>
        </div>
      ),
    },
  ];

  const customByCol = [
    {
      section: "Infrastructure",
      requests: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"Unlimited"}</span>
        </div>
      ),
      endpoints: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"All models (100+)"}</span>
        </div>
      ),
      proxy: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"Unlimited"}</span>
        </div>
      ),
      async: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      load_balancing: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),

      request_entries: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      fallback: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      self_hosted: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },
    {
      section: "Platform",
      seats: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"Unlimited seats"}</span>
        </div>
      ),
      dashboard: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      playground: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      analytics: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      webhooks: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      classification: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      eval: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),

      manual_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      semantic_cache: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      prompt_opt: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      prompt_management: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),

      fine_tuning: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },
    {
      section: "Security",
      role: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      dpa: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      soc2: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      saml: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      sso: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },

    {
      section: "Compatibility",
      openai: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
        </div>
      ),
      langchain: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      LlamaIndex: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },

    {
      section: "Support",
      priority: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"Founders 24/7 text"}</span>
        </div>
      ),
      white_glove: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      sla: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
      pii: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          {" "}
          <Check fill="fill-primary" />
        </div>
      ),
    },

    {
      section: "Data",
      retention: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"120 days"}</span>
        </div>
      ),
      json: (
        <div className="flex flex-row h-[42px] items-center gap-xxs self-stretch shadow-border-b shadow-gray-2">
          <Check fill="fill-primary" />
          <span className="text-gray-white">&nbsp;{"JSON & CSV export"}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col max-w-[1000px] items-center gap-md w-full">
      <div className="flex flex-row max-w-[1000px] gap-md items-start self-stretch">
        <div className="flex flex-col py-md items-start gap-md flex-1 w-full">
          <div className="flex flex-row h-[80px] py-xxs items-end gap-[10px] self-stretch"></div>
          {titleByCol.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-start w-full"
            >
              <div className="flex flex-row h-[42px] items-center gap-xxs w-full">
                <span className="text-md-md text-gray-white">
                  {feature.section}
                </span>
              </div>
              {Object.keys(feature).map((key) => {
                if (key !== "section") {
                  return (
                    <div
                      key={key}
                      className="flex flex-row h-[42px] items-center gap-xxs shadow-border-b shadow-gray-2 w-full"
                    >
                      <span className="text-md-regular text-gray-4">{`${feature[key]}`}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-md items-start gap-md flex-1 self-stretch">
          <div className="flex flex-col items-start gap-sm self-stretch">
            <span className="display-sm text-gray-white">Free</span>
            <Button
              variant="r4-white"
              text="Get started"
              className="flex-1"
              width="w-full"
              onClick={
                () =>
                  (window.location.href =
                    "https://platform.keywordsai.co/login") // should direct to the pricing page in the platform later
              }
            />
          </div>
          {starterByCol.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-start w-full"
            >
              <div className="flex flex-row h-[42px] items-center gap-xxs w-full"></div>
              {Object.keys(feature).map((key) => {
                if (key !== "section") {
                  return feature[key];
                }
                return null;
              })}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-md items-start gap-md flex-1  bg-gray-2 shadow-border shadow-gray-3 rounded-md p-md">
          <div className="flex flex-col items-start gap-sm self-stretch">
            <span className="display-sm text-gray-white">Team</span>
            <Button
              variant="r4-primary"
              text="Get started"
              className="flex-1 self-stretch"
              width="w-full"
              onClick={
                () =>
                  (window.location.href =
                    "https://platform.keywordsai.co/login") // should direct to the pricing page in the platform later
              }
            />
          </div>
          {proByCol.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-start w-full"
            >
              <div className="flex flex-row h-[42px] items-center gap-xxs w-full"></div>
              {Object.keys(feature).map((key) => {
                if (key !== "section") {
                  return feature[key];
                }
                return null;
              })}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-md items-start gap-md flex-1 self-stretch">
          <div className="flex flex-col items-start gap-sm self-stretch">
            <span className="display-sm text-gray-white">Enterprise</span>
            <Button
              variant="r4-white"
              text="Talk to founders"
              className="flex-1"
              width="w-full self-stretch"
              onClick={() =>
                window.open("https://cal.com/keywordsai/demo", "_blank")
              }
            />
          </div>
          {customByCol.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-end items-start w-full"
            >
              <div className="flex flex-row h-[42px] items-center gap-xxs w-full"></div>
              {Object.keys(feature).map((key) => {
                if (key !== "section") {
                  return feature[key];
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
    // <table className="w-full max-w-[1000px] border-collapse items-center gap-md" >
    //   <thead className="border-collapse">
    //     <tr className="h-[80px] grid grid-cols-4 border-gray-3">
    //       <th></th>
    //       {plans.map((plan, index) => (
    //         <div className="flex flex-col gap-xs items-start flex-1 border-collapse w-full">
    //           <th
    //             className=" display-sm "
    //             key={index}
    //           >
    //             {plan.name}
    //           </th>
    //             {buttons[0][plan.key]}
    //         </div>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody className="border-collapse">
    //     {features.map((feature, index) => (
    //       <tr
    //         key={index}
    //         className="h-[60px] grid grid-cols-4 border-b border-gray-3"
    //       >
    //         {Object.keys(feature).map((key, subIndex) => {
    //           if (key !== "title") {
    //             return (
    //               <td
    //                 className="text-md-regular flex items-center self-stretch justify-center"
    //                 key={subIndex}
    //               >
    //                 {feature[key]}
    //               </td>
    //             );
    //           } else {
    //             return (
    //               <td
    //                 className="text-md-medium flex items-center self-stretch flex-1  border-gray-3"
    //                 key={subIndex}
    //               >
    //                 {feature.title}
    //               </td>
    //             );
    //           }
    //         })}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}
