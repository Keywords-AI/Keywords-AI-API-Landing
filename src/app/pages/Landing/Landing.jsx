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
  Electric,
  Stars,
  Chat,
  Document,
} from "src/app/components/icons";
import { Page } from "src/app/components/Page";
import { Divider } from "src/app/components/Divider";
import { SectionTitle } from "src/app/components/SectionTitle";
import { ModelLogos } from "./components";
import { CodeBoxDisplay } from "./components/CodeBoxDisplay";
import { useNavigate } from "react-router-dom";
import { ContactDialog } from "src/app/components/ContactDialog";
export function Landing() {
  const navigate = useNavigate();
  const IntroductionSection = () => {
    return (
      <div
        aria-label="introduction section"
        className="flex p-xxxl sm:px-lg flex-col items-center gap-xxxl self-stretch"
      >
        <div className="flex max-w-[1200px] flex-col items-start gap-xl w-full">
          <div className="flex flex-col items-center gap-lg self-stretch">
            {/* <Button text="Read our launch on Product Hunt" variant="news" /> */}
            <div className="bg-gradient-out p-[1px] rounded-lg">
              <Button
                text="Keywords AI Beta Release"
                variant="beta"
                arrow={false}
              />
            </div>
            <p className="sm:hidden display-xl self-stretch gradient-text text-center">
              Build scalable AI applications <br /> with dynamic LLM routing
            </p>
            <p className=" hidden sm:block display-lg self-stretch gradient-text text-center">
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
            {/* <Button text="Get started" variant="secondary" /> */}
            <Button
              text="Join waitlist"
              variant="secondary"
              onClick={() => navigate("/beta-access")}
            />
            {/* <Button text="Documentation" variant="header" /> */}
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
        className="flex px-xxxl sm:px-lg py-xxl flex-col items-center gap-xl self-stretch "
      >
        <SectionTitle
          title={"Leverage all best-in-class LLMs"}
          subtitle={
            <span>
              We are actively testing and adding new models every week.
            </span>
          }
        />
        <ModelLogos />
        <p className="w-full max-w-[600px] display-sm text-center">
          Efficiently route to the best model for optimized performance.
        </p>
        <Divider />
        <div className="flex items-center justify-center gap-xxs">
          <p className="text-md-regular text-gray-4 ">
            Latest added model:{" "}
            <span className="text-gray-white">{"Claude 2.1"}</span>
          </p>
        </div>
      </div>
    );
  };
  const IntegrateSection = () => {
    return (
      <div
        aria-label="integration section"
        className="flex px-xxxl sm:px-lg py-xxl flex-col items-center gap-xl self-stretch"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl w-full">
          <div className="flex-col items-center gap-lg self-stretch">
            <Electric />
            <SectionTitle
              title={"Integrate within minutes"}
              subtitle={"Easy integration with OpenAI style API call."}
            />
          </div>
          <CodeBoxDisplay />
          <p className="display-sm max-w-[600px] text-gray-white text-center">
            A simple interface so you can switch with just a few lines. It fits
            right into your codebase.
          </p>
          <Divider />
          {/* <div className="flex items-center justify-center gap-xxs">
            <p className="text-md-regular text-gray-white ">
              {"Read documentation"}
            </p>
            <ArrowRight fill="fill-gray-white" />
          </div> */}
        </div>
      </div>
    );
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
        linkIcon: <Stars />,
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
        linkIcon: <Chat />,
        title: "Conversational AI",
        content:
          "Empower your chatbot applications with the human-like interaction capabilities. Offer dynamic conversation flow, deliver accurate responses, and enhance user engagement.",
      },
      {
        linkIcon: <Document />,
        title: "Document Summary",
        content:
          "Optimize your workflows with our API's ability to create comprehensive and meaningful summaries from complex and lengthy documents.",
      },
      {
        linkIcon: <Text />,
        title: "Textual Analysis",
        content:
          "Dive deep into your data and extract valuable insights with our textual analysis capabilities. Facilitate better decision making with accurate data interpretation.",
      },
    ];
    return (
      <div
        aria-label="Features section"
        className="flex-col px-xxxl sm:px-lg py-xxl items-center gap-xl self-stretch bg-gray-black"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl w-full">
          <SectionTitle
            title={"Power up your LLM infrastructure"}
            subtitle={"Our dynamic router supports all LLM use cases."}
          />
          <div
            aria-label="card grid"
            className="flex w-max-[1000px] items-start justify-center content-start gap-xl w-full flex-wrap"
          >
            {cardData.map((card, index) => (
              <SmallCard {...card} key={index} />
            ))}
          </div>
          <p className="display-sm text-center max-w-[600px] w-full">
            Optimize costs, enhance performance, and elevate uptime for your AI
            application.
          </p>
          <Divider />
          {/* <div className="flex items-center justify-center gap-xxs">
            <p className="text-md-regular text-gray-white ">
              {"Try examples in playground"}
            </p>
            <ArrowRight fill="fill-gray-white" />
          </div> */}
        </div>
      </div>
    );
  };

  const CallToActionSection = () => {
    return (
      <div className="flex px-[180px] sm:px-lg pt-xxxl flex-col items-center gap-xl self-stretch">
        <div className="flex max-w-[1200px] flex-col items-center gap-sm ">
          <p className="display-lg text-center gradient-text ">
            Integrate in minutes. <br />
            Beta Available today.
          </p>
        </div>
        <div className="flex items-start gap-xxs">
          <Button
            text="Get started"
            variant="secondary"
            onClick={() => navigate("/beta-access")}
          />
          <ContactDialog />
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
      <ModelSectionSection />
      <IntegrateSection />
      <FeaturesSection />
      <CallToActionSection />
    </Page>
  );
}
