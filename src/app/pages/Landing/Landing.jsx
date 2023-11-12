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
export function Landing() {
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
    <Page>
      {/* section 1 */}
      <div
        aria-label="section1"
        className="flex p-xxxl flex-col items-center gap-xxxl self-stretch"
      >
        <div className="flex max-w-[1200px] flex-col items-start gap-xl w-full">
          <div className="flex flex-col items-start gap-lg self-stretch">
            <div className="btn-rainbow-border">
              <button className="button-primary gradient-in">
                <span className="text-sm-regular text-center">
                  Read our launch on Product Hunt
                </span>
              </button>
            </div>

            <p className="display-xl self-stretch gradient-text">
              Streamline Your AI Costs. <br />
              Not Your Capabilities.
            </p>
            <p className="text-lg text-gray-4 self-stretch">
              Get the results you'd expect from high-cost AI models, but at a
              fraction of the price. <br />
              We optimize your queries to deliver the most cost-effective, yet
              powerful, output.
            </p>
          </div>
          <div className="flex items-start gap-xs">
            <button className="button-primary bg-gray-white">
              <span className="text-sm-regular text-center flex-1 text-gray-2">
                Get started
              </span>
              <ArrowRight />
            </button>
            <button className="button-header">
              <span className="text-sm-regular text-center text-gray-4 flex-1">
                Documentation
              </span>
              <ArrowRight fill="fill-gray-4" />
            </button>
          </div>
        </div>
        <div className="flex max-w-[1200px] items-center gap-xxs self-stretch">
          {/* <p className="text-sm-regular text-resend-64">Backed by</p>
          <div className="flex items-center gap-[4px]">
            <Y />
            <span className="text-sm-regular gradient-text">Combinator</span>
          </div> */}
        </div>
      </div>
      {/* section 2 */}
      <div
        aria-label="section2"
        className="flex-col px-xxxl py-xxl items-center gap-xl self-stretch bg-gray-black"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl rounded-xl border-t border-box border-solid w-full">
          <div className="h-[1px] gradient-bar self-stretch"></div>
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
            className="flex w-max-[1200px] items-start content-start gap-[24px] self-stretch flex-wrap"
          >
            {cardData.map((card, index) => (
              <SmallCard {...card} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div
        aria-label="section3"
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
          <div className="gradient-out p-[1px] rounded-lg">
            <button className="button-secondary-black gradient-in">
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
      {/* section 4 */}
      <div className="flex px-[180px] pt-xxxl flex-col items-center gap-xl self-stretch">
        <div className="flex max-w-[1200px] flex-col items-center gap-sm ">
          <p className="display-lg text-center gradient-text ">
            Integrate in minutes. <br />
            Available today.
          </p>
        </div>
        <div className="flex items-start gap-xxs">
          <button className="button-primary bg-gray-white">
            <span className="text-sm-regular flex-1 text-gray-2">
              Get started
            </span>
            <ArrowRight fill="fill-gray-black" />
          </button>
          <button className="button-header group hover:bg-gray-3 ">
            <span className="text-sm-regular flex-1 text-gray-4 group-hover:text-gray-white">
              Contact us
            </span>
            <ArrowRight fill="fill-gray-4" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Subtract />
        </div>
      </div>
    </Page>
  );
}
