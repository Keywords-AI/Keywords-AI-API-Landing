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
import FeatureSection from "./FeatureSection";
import { AdvantagesSecctions } from "./AdvantagesSecctions";

export function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const IntroductionSection = () => {
    return (
      <div
        aria-label="frame 636"
        className="flex p-xxxl sm:px-lg flex-col items-center gap-xxxl self-stretch bg-gray-black"
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
              <span className="text-center text-sm-regular gradient-text">
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
                className="sm:hidden  text-center display-xl gradient-text"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Unified DevOps platform to build AI applications
              </p>
              <p
                className="hidden sm:block text-center display-lg gradient-text"
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
                Meet the new way to build software with LLMs. <br />
                Keywords AI has every feature you need to build, deploy, and
                scale your application.
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
        className="flex-col p-xxxl items-center gap-xl self-stretch bg-gray-black flex-nowrap"
      >
        <div className="flex-col items-center gap-sm self-stretch text-center caption-cap gradient-text">
          POWERING THE WORLD’S BEST AI PRODUCT TEAMS
        </div>
        <div className="flex max-w-[1000px] justify-center items-start content-start gap-[20px] w-full flex-wrap">
          <WonderChatLogo />
          <AgentHubLogo />
          <ShepherdLogo />
          <JustPaidLogo />
          <EduPhoriaAiLogo />
        </div>
        <div className="min-h-[1px] shrink-0 bg-highlight w-full max-w-[1200px]" />
      </div>
    );
  };

  const CommentSesction = () => {
    return (
      <div
        aria-label="frame 643"
        className="flex-col p-xxxl items-center gap-xl self-stretch bg-gray-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={108}
          height={32}
          fill="none"
        >
          <path
            fill="#1E1E23"
            d="M16.614.5h74.771c8.561 0 15.501 6.94 15.501 15.5 0 8.56-6.94 15.5-15.5 15.5H16.615c-8.561 0-15.5-6.94-15.5-15.5 0-8.56 6.939-15.5 15.5-15.5Z"
          />
          <path
            stroke="#3E424A"
            d="M16.614.5h74.771c8.561 0 15.501 6.94 15.501 15.5 0 8.56-6.94 15.5-15.5 15.5H16.615c-8.561 0-15.5-6.94-15.5-15.5 0-8.56 6.939-15.5 15.5-15.5Z"
          />
          <path
            fill="#F9FAFD"
            fillRule="evenodd"
            d="M23.505 5.424c.17-.131.38-.212.589-.212.32 0 .62.141.809.393l5.724 7.39v5.902l1.708 1.711a1.02 1.02 0 0 1 0 1.43 1.001 1.001 0 0 1-1.419 0l-2.287-2.316v-6.031l-5.304-6.847v-.01a1.005 1.005 0 0 1 .18-1.41Zm11.88 15.872a.991.991 0 0 1-.463-.265l-2.008-2.024a1.001 1.001 0 0 1-.29-.835V12.26h-.03L26.841 4.83a.994.994 0 0 1-.21-.661A12.08 12.08 0 0 0 24.614 4c-6.627 0-12 5.373-12 12s5.373 12 12 12a12 12 0 0 0 10.771-6.704Z"
            clipRule="evenodd"
          />
          <path
            fill="#B1B3BC"
            d="M57.386 12.806 56.58 12l-3.194 3.194L50.19 12l-.805.806L52.58 16l-3.194 3.194.805.806 3.195-3.194L56.58 20l.806-.806L54.19 16l3.195-3.194Z"
          />
          <path
            fill="#F9FAFD"
            fillRule="evenodd"
            d="M81.776 23.201a2.809 2.809 0 0 1-.579.839l-2.508 2.507a2.81 2.81 0 0 1-3.973 0l-2.508-2.507a2.81 2.81 0 0 1 0-3.974l2.508-2.508a2.81 2.81 0 0 1 3.973 0l2.508 2.508c.25.25.442.535.579.839h2.423l-5.94-10.287a2.81 2.81 0 0 1 1.029-3.838l3.071-1.773a2.81 2.81 0 0 1 3.838 1.028l8.812 15.262a2.81 2.81 0 0 1-1.029 3.838l-3.071 1.773a2.81 2.81 0 0 1-3.838-1.028l-1.546-2.68-3.75.001ZM80.248 9.47l8.812 15.262c.141.245.456.33.7.188l3.072-1.773a.513.513 0 0 0 .188-.702L84.21 7.183a.513.513 0 0 0-.702-.188l-3.071 1.773a.513.513 0 0 0-.188.702Zm-.675 12.22-2.507-2.508c-.2-.2-.526-.2-.726 0l-2.508 2.508c-.2.2-.2.525 0 .726l2.508 2.508c.2.2.525.2.726 0l2.508-2.508c.2-.2.2-.526 0-.726Z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex-col items-center gap-lg max-w-[600px] w-full">
          <p className="display-xs text-center text-gray-white self-stretch">
            “Keywords AI legit has some of the best UX/DX I've ever seen in my
            life. I'm not even just saying that, I truly don't think I've ever
            integrated a product that was as easy.”
          </p>
          <div className="flex-col items-center gap-xxs">
            <p className="text-md-medium text-center text-gray-white">
              Rahul Behal
            </p>
            <p className="text-sm-regular text-center text-gray-4">
              Co-founder, AgentHub
            </p>
          </div>
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
      <FeatureSection />
      <CommentSesction />
      <AdvantagesSecctions />
      {/* <IntegrateSection /> */}
      {/* <FeaturesSection /> */}
      <CallToActionSection />
    </Page>
  );
}
