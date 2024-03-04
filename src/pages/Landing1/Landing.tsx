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

import { useNavigate } from "react-router-dom";
import { ContactDialog } from "src/components/ContactDialog";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Right } from "src/components/Icons";
import { Button } from "src/components/Buttons";
import {
  AgentHubLogo,
  EduPhoriaAiLogo,
  JustPaidLogo,
  ShepherdLogo,
  WonderChatLogo,
} from "./TeamsLogo";

export function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const IntroductionSection = () => {
    return (
      <div
        aria-label="frame 636"
        className="flex p-xxxl sm:px-lg flex-col items-center gap-xxxl self-stretch"
      >
        <div
          aria-label="frame 2023"
          className="flex max-w-[1200px] flex-col items-center gap-md w-full"
        >
          <div
            aria-label="frame 2024"
            className="flex py-xxxs px-xs justify-center items-center gap-xxs rounded-lg border border-solid border-gray-3 bg-gray-2"
            data-aos="custom-fade-down"
          >
            <span className="text-center text-sm-regular text-resend-64">
              Backed by
            </span>
            <div className="flex items-center gap-xxxs">
              <Y />
              <span className="text-center text-sm-regular [background:var(--cool-white,linear-gradient(92deg,#FFF_47.94%,#D1CAE4_100%))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Combinator
              </span>
            </div>
          </div>
          <div
            aria-label="frame 1601"
            className="flex-col max-w-[1200px] w-full items-center gap-xl"
          >
            <div
              aria-label="frame 619"
              className="flex-col items-center gap-lg self-stretch"
            >
              <p
                className="sm:hidden  text-center display-xl [background:var(--cool-white,linear-gradient(92deg,#FFF_47.94%,#D1CAE4_100%))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Unified DevOps platform to build AI applications
              </p>
              <p
                className="hidden sm:block text-center display-lg [background:var(--cool-white,linear-gradient(92deg,#FFF_47.94%,#D1CAE4_100%))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Unified DevOps platform to build AI applications
              </p>
              <p
                className=" display-xs self-stretch text-gray-4 text-center"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Meet the new way to build software with LLMs. Keywords AI has
                every feature you need to build, deploy, and scale your
                application.
              </p>
            </div>
          </div>
          <div
            aria-label="frame 1816"
            className="flex items-center justify-center gap-xs"
          ></div>
          <div
            className="flex items-center justify-center gap-xs self-stretch"
            data-aos="custom-fade-down"
            data-aos-delay="350"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <Button text="Get started" variant="secondary" /> */}
            <Button
              text="Get started"
              variant="big-white"
              // onClick={() => (window.location.href = platformURL)}
              onClick={() => navigate("beta-access")}
              icon={Right}
            />
            <Button
              text="Book a demo"
              variant="big-black"
              icon={Right}
              onClick={() =>
                (window.location.href = "https://zcal.co/keywords-ai")
              }
            />
          </div>
        </div>

        <div
          className="flex"
          data-aos="custom-fade-down"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="/images/preview.png" className="w-full h-full" />
        </div>
      </div>
    );
  };
  const ColaborationSection = () => {
    return (
      <div
        aria-label="frame 631"
        className="flex-col p-[120px] items-center gap-xl self-stretch"
      >
        <div className="flex-col items-center gap-sm self-stretch text-center caption-cap [background:var(--resend-com-linear-nero-nero,linear-gradient(135deg,#FFF_30%,rgba(255,255,255,0.50)_100%))] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          POWERING THE WORLD’S BEST AI PRODUCT TEAMS
        </div>
        <div className="flex max-w-[1000px] justify-center items-start content-start gap-[20px] w-full flex-wrap">
          <WonderChatLogo />
          <AgentHubLogo />
          <ShepherdLogo />
          <JustPaidLogo />
          <EduPhoriaAiLogo />
        </div>
        <div className="h-[1px] bg-highlight w-full max-w-[1200px]" />
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
          {/* <CodeBoxDisplay /> */}
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
            {/* {cardData.map((card, index) => (
              <SmallCard {...card} key={index} />
            ))} */}
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
      {/* <ModelSectionSection /> */}
      <ColaborationSection />
      <IntegrateSection />
      <FeaturesSection />
      <CallToActionSection />
    </Page>
  );
}
