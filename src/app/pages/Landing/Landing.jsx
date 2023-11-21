import { Button } from "src/app/components/Button";
import { SmallCard } from "./components/SmallCard/SmallCard";
import "./Landing.css";
import {
  Subtract,
  ArrowRight,
  Brain,
  Search,
  Y,
  Text,
} from "src/app/components/icons";
import { Page } from "src/app/components/Page";
import { Divider } from "src/app/components/Divider";
import { SectionTitle } from "src/app/components/SectionTitle";
export function Landing() {
  const IntroductionSection = () => {
    return (
      <div
        aria-label="introduction section"
        className="flex p-xxxl flex-col items-center gap-xxxl self-stretch"
      >
        <div className="flex max-w-[1200px] flex-col items-start gap-xl w-full">
          <div className="flex flex-col items-center gap-lg self-stretch">
            <Button text="Read our launch on Product Hunt" variant="primary" />

            <p className="display-xl self-stretch gradient-text text-center">
              Build scalable AI applications <br /> with dynamic LLM routing
            </p>
            <p className="text-lg text-gray-4 self-stretch text-center">
              We connect the best model for your prompts with a unified API
              end-point.
              <br />
              Outperform any LLM, eliminate downtime, and cut costs by up to
              97%.
            </p>
          </div>
          <div className="flex items-center justify-center gap-xs self-stretch">
            <Button text="Get started" variant="secondary" />
            <Button text="Documentation" variant="header" />
          </div>
        </div>
        <div className="flex max-w-[1200px] items-center justify-center gap-xxs w-full">
          <p className="text-sm-regular text-resend-64">Backed by</p>
          <div className="flex items-center gap-xxxs">
            <Y />
            <span className="text-sm-regular gradient-text">Combinator</span>
          </div>
        </div>
      </div>
    );
  };
  const ModelSectionSection = () => {
    return (
      <div
        aria-label="Model selection section"
        className="flex px-xxxl py-xxl flex-col items-center gap-xxl self-stretch"
      >
        <SectionTitle
          title={"Leverage all best-in-class LLMs"}
          subtitle={
            <span>
              Efficiently route to the best model for optimized performance.
              <br />
              We are actively testing and adding new models every week.
            </span>
          }
        />
      </div>
    );
  };
  const IntegrateSection = () => {
    return;
  };

  const FeaturesSection = () => {
    const cardData = [
      {
        linkIcon: <Brain />,
        title: "Advanced Reasoning",
        content:
          "With vast general knowledge and finely-tuned algorithms, our API comprehends intricate instructions in natural language and tackles tough challenges efficiently.",
      },
      {
        linkIcon: <Text />,
        title: "Content Generation",
        content:
          "Unleash the creativity of our API for compelling copywriting, SEO-optimized articles, or even scriptwriting. Get quality that rivals GPT-4 at a fraction of the cost.",
      },
      {
        linkIcon: <Search />,
        title: "Intelligent Search",
        content:
          "Enhance your search features with contextual understanding and semantic matching, improving both accuracy and user satisfaction. Supports RAG.",
      },
      {
        linkIcon: <Brain />,
        title: "Advanced Reasoning",
        content:
          "With vast general knowledge and finely-tuned algorithms, our API comprehends intricate instructions in natural language and tackles tough challenges efficiently.",
      },
      {
        linkIcon: <Text />,
        title: "Content Generation",
        content:
          "Unleash the creativity of our API for compelling copywriting, SEO-optimized articles, or even scriptwriting. Get quality that rivals GPT-4 at a fraction of the cost.",
      },
      {
        linkIcon: <Search />,
        title: "Intelligent Search",
        content:
          "Enhance your search features with contextual understanding and semantic matching, improving both accuracy and user satisfaction. Supports RAG.",
      },
    ];
    return (
      <div
        aria-label="Features section"
        className="flex-col px-xxxl py-xxl items-center gap-xl self-stretch bg-gray-black"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl rounded-xl border-t border-box border-solid w-full">
          <Divider />
          <div
            aria-label="section title"
            className="flex flex-col text-center items-center gap-sm self-stretch"
          >
            <p className="gradient-text display-lg">
              Powerful AI Doesn't Have to Be Expensive.
            </p>
            <p className="text-lg text-gray-4 text-center">
              Startup-friendly pricing, enterprise-level AI capabilities.
            </p>
          </div>
          <div
            aria-label="card grid"
            className="flex w-max-[1200px] items-start justify-center content-start gap-[24px] self-stretch flex-wrap"
          >
            {cardData.map((card, index) => (
              <SmallCard {...card} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const PerformanceSection = () => {
    return (
      <div
        aria-label="Performance section "
        className="flex flex-col items-center gap-xl px-xxxl py-xxl self-stretch bg-gray-black justify-center"
      >
        <div className="flex max-w-[1200px] flex-col items-start gap-lg w-full ">
          <div
            aria-label="section title"
            className="flex flex-col items-start gap-sm self-stretch"
          >
            <p className="gradient-text display-lg">
              Performance You Can Trust.
            </p>
            <p className="text-lg text-gray-4 ">
              We ran MT-Bench to evaluate conversational flow,
              instruction-following, and diverse knowledge from STEM to
              humanities.Our score of 8.8 stands outrivaling GPT-4 and
              outperforming models including GPT-3.5 and Claude 2.
            </p>
          </div>
          <div className="bg-gradient-out p-[1px] rounded-lg">
            <button className="button-secondary-black bg-gradient-in">
              <span className="text-sm-regular text-center flex-1">
                Benchmark results
              </span>
              <ArrowRight fill="fill-gray-white" />
            </button>
          </div>
        </div>
        <div className="flex h-[480px] flex-col justify-center items-center rounded-xl border border-solid border-box max-w-[1200px] w-full">
          <p className="display-sm text-gray-3">Graph Plaeholder</p>
        </div>
      </div>
    );
  };

  const CallToActionSection = () => {
    return (
      <div className="flex px-[180px] pt-xxxl flex-col items-center gap-xl self-stretch">
        <div className="flex max-w-[1200px] flex-col items-center gap-sm ">
          <p className="display-lg text-center gradient-text ">
            Integrate in minutes. <br />
            Available today.
          </p>
        </div>
        <div className="flex items-start gap-xxs">
          <Button text="Get started" variant="secondary" />
          <Button text="Contact us" variant="header" />
        </div>
        <div className="flex justify-center items-center">
          <Subtract />
        </div>
      </div>
    );
  };

  return (
    <Page>
      <IntroductionSection />
      <FeaturesSection />
      <PerformanceSection />
      <CallToActionSection />
    </Page>
  );
}
