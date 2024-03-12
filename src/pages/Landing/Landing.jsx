import { SmallCard } from "./components/SmallCard/SmallCard";
import "./Landing.css";
import {
  Subtract,
  ArrowRight,
  Brain,
  Search,
  Y,
  Text,
  Stars,
  Chat,
  Document,
  Electric,
} from "src/components/icons-old";
import { Page } from "src/components/Page";
import { Divider } from "src/components/Divider";
import { SectionTitle } from "src/components/SectionTitle";
import { ModelLogos } from "./components";
import { CodeBoxDisplay } from "./components/CodeBoxDisplay";
import { useNavigate } from "react-router-dom";
import { ContactDialog } from "src/components/ContactDialog";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Right } from "src/components/Icons";
import { Button } from "src/components/Buttons";
import { platformURL } from "src/utilities/platformURL";
import DashboardPreview from "./components/DashboardPreview";

export function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const IntroductionSection = () => {
    return (
      <div
        aria-label="introduction section"
        className="flex p-xxxl sm:px-lg flex-col items-center gap-xxxl self-stretch"
      >
        <div className="flex max-w-[1200px] flex-col items-start gap-xl w-full">
          <div className="flex flex-col items-center gap-lg self-stretch">
            <div
              className="bg-gradient-out p-[1px] rounded-lg"
              data-aos="custom-fade-down"
            >
              <Button text="Keywords AI beta release" variant="beta" />
            </div>
            <p
              className="sm:hidden display-xl self-stretch gradient-text text-center"
              data-aos="custom-fade-down"
              data-aos-delay="50"
            >
              The new way to build and monitor <br /> scalable LLM applications
            </p>
            <p
              className=" hidden sm:block display-lg self-stretch gradient-text text-center"
              data-aos="custom-fade-down"
              data-aos-delay="150"
            >
              The new way to build and monitor <br /> scalable LLM applications
            </p>
            <p
              className="text-lg text-gray-4 self-stretch text-center"
              data-aos="custom-fade-down"
              data-aos-delay="250"
            >
              We connect the best model for your prompts with a unified API
              end-point.
              <br className="sm:hidden" />
              {` Outperform any LLM, eliminate downtime, and cut costs by up to
              97%.`}
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-xs self-stretch"
            data-aos="custom-fade-down"
            data-aos-delay="350"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <Button text="Get started" variant="secondary" /> */}
            <Button
              text="Join waitlist"
              variant="r18-white"
              // onClick={() => (window.location.href = platformURL)}
              onClick={() => navigate("beta-access")}
              icon={Right}
            />
            <Button
              text="Book a demo"
              variant="r18-black"
              icon={Right}
              onClick={() =>
                (window.location.href = "https://cal.com/keywordsai/demo")
              }
            />
          </div>
        </div>
        <div
          data-aos="custom-fade-down"
          data-aos-delay="450"
          data-aos-anchor-placement="top-bottom"
        >
          {/* <div className="flex">
            <img src="/images/preview.png" className="w-full h-full" />
          </div> */}
        </div>

        <div
          className="flex max-w-[1200px] items-center justify-center gap-xxs w-full"
          data-aos="custom-fade-down"
          data-aos-delay="550"
          data-aos-anchor-placement="top-bottom"
        >
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
        className="flex px-xxxl sm:px-lg py-xxl flex-col items-center gap-xl self-stretch overflow-hidden"
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
          <p className="t`ext-md-regular text-gray-4 ">
            Latest model:{" "}
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
        className="flex px-xxxl sm:px-lg py-xxl flex-col items-center gap-xl self-stretch overflow-hidden"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl w-full">
          <div className="flex-col items-center gap-lg self-stretch">
            {/* <img src="./electric.svg" alt="electric" className="w-[188.5px] h-[206px]" /> */}
            <div
              className="w-[188.5px] h-[206px]"
              style={{
                filter: "drop-shadow(0px 0px 40px rgba(143, 0, 210, 0.25))",
              }}
            >
              <Electric />
            </div>

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
          <Button
            variant="text"
            text="Read Documentation"
            icon={Right}
            iconPosition="right"
            iconSize="xs"
            // onClick={() =>
            //   (window.location.href = "https://docs.keywordsai.co")
            // }
            onClick={() => navigate("beta-access")}
          />
        </div>
      </div>
    );
  };

  const FeaturesSection = () => {
    const cardData = [
      {
        linkIcon: <Brain />,
        title: "Advanced Reasoning",
        content: "Efficiently decodes complex instructions.",
      },
      {
        linkIcon: <Stars />,
        title: "Content Generation",
        content: "Elevates SEO articles and creative scriptwriting.",
      },
      {
        linkIcon: <Search />,
        title: "Intelligent Search",
        content: "Boosts accuracy with contextual understanding.",
      },
      {
        linkIcon: <Chat />,
        title: "Conversational AI",
        content: "Delivers human-like, dynamic chatbot interactions.",
      },
      {
        linkIcon: <Document />,
        title: "Document Summary",
        content: "Creates concise summaries from extensive texts.",
      },
      {
        linkIcon: <Text />,
        title: "Textual Analysis",
        content: "Extracts insights for informed decision-making.",
      },
    ];
    return (
      <div
        aria-label="Features section"
        className="flex-col px-xxxl sm:px-lg py-xxl items-center gap-xl self-stretch bg-gray-blac overflow-hidden"
      >
        <div className="max-w-[1200px] flex-col items-center gap-xl w-full">
          <SectionTitle
            title={"Power up your LLM infrastructure"}
            subtitle={"Our dynamic router supports all LLM use cases."}
          />
          <div
            aria-label="card grid"
            className="flex max-w-[1000px] items-start justify-center content-start gap-xl w-full flex-wrap"
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

          <Button
            variant="text"
            text="Try examples in playground"
            icon={Right}
            iconPosition="right"
            iconSize="xs"
            // onClick={() =>
            //   (window.location.href = platformURL + "/platform/playground")
            // }
            onClick={() => navigate("beta-access")}
          />
        </div>
      </div>
    );
  };

  const CallToActionSection = () => {
    return (
      <div className="flex px-[180px] sm:px-lg pt-xxxl flex-col items-center gap-xl self-stretch overflow-hidden">
        <div className="flex max-w-[1200px] flex-col items-center gap-sm ">
          <p className="display-lg text-center gradient-text ">
            Integrate in minutes. <br />
            Beta available today.
          </p>
        </div>
        <div className="flex items-start gap-xxs">
          <Button
            text="Get started"
            variant="r18-white"
            // onClick={() => (window.location.href = platformURL + "/login")}
            onClick={() => navigate("beta-access")}
          />
          {/* <ContactDialog /> */}
          <Button
            text="Contact us"
            variant="r18-black"
            icon={Right}
            onClick={() => window.open("mailto:team@keywordsai.co")}
          />
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
