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
import CodePrewview from "./CodePrewview";

export function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const IntroductionSection = () => {
    return (
      <div
        aria-label="frame 636"
        className="flex p-xxxl sm:p-lg flex-col items-center gap-xxxl self-stretch bg-gray-black"
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
              className="flex-col items-center gap-lg w-full max-w-[1000px]"
            >
              <p
                className="sm:hidden  text-center display-xl gradient-text"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Unified DevOps platform <br />
                to build AI applications
              </p>
              <p
                className="hidden sm:block text-center display-xs gradient-text"
                data-aos="custom-fade-down"
                data-aos-delay="50"
              >
                Unified DevOps platform <br />
                to build AI applications
              </p>
              <p
                className="sm:hidden display-xs self-stretch text-gray-4 text-center"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Every feature you need to build, deploy, and scale your
                application. <br />
                Keywords AI is the new way to build software with LLMs.
              </p>
              <p
                className="hidden sm:flex text-md self-stretch text-gray-4 text-center"
                data-aos="custom-fade-down"
                data-aos-delay="250"
              >
                Every feature you need to build, deploy, and scale your
                application. <br />
                Keywords AI is the new way to build software with LLMs.
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
              iconSize="sm"
            />
            <Button
              text="Book a demo"
              variant="big-black"
              icon={Right}
              iconSize="sm"
              iconFill=""
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
          <img src="/images/preview.png" className="w-full max-w-[1200px]" />
        </div>
      </div>
    );
  };
  const ColaborationSection = () => {
    return (
      <div
        aria-label="frame 631"
        className="flex-col p-xxxl sm:p-lg items-center gap-xl self-stretch bg-gray-black flex-nowrap"
      >
        <div className="flex-col items-center gap-sm self-stretch text-center caption-cap gradient-text">
          POWERING THE WORLD’S BEST AI PRODUCT TEAMS
        </div>
        <div className="flex max-w-[1000px] justify-center items-start content-start gap-[20px] w-full flex-wrap">
          <div
            className="cursor-pointer"
            onClick={() => window.open("https://wonderchat.io/", "_blank")}
          >
            <WonderChatLogo />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open("https://www.agenthub.dev/", "_blank")}
          >
            <AgentHubLogo />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open("https://shepherd.study/", "_blank")}
          >
            <ShepherdLogo />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open("https://www.justpaid.io/", "_blank")}
          >
            <JustPaidLogo />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open("https://eduphoria.ai/", "_blank")}
          >
            <EduPhoriaAiLogo />
          </div>
        </div>
        <div className="min-h-[1.2px] shrink-0 [background:linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.20)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0.04)_100%)] w-full max-w-[1200px]" />
      </div>
    );
  };

  const CommentSesction = () => {
    return (
      <div
        aria-label="frame 643"
        className="flex-col p-xxxl items-center gap-xl self-stretch bg-gray-black sm:p-lg"
      >
        <svg
          width={108}
          height={40}
          viewBox="0 0 108 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6144 0.5H87.3855C98.1551 0.5 106.886 9.23045 106.886 20C106.886 30.7696 98.1551 39.5 87.3856 39.5H20.6145C9.84491 39.5 1.11444 30.7696 1.11444 20C1.11444 9.23045 9.84489 0.5 20.6144 0.5Z"
            fill="#1E1E23"
          />
          <path
            d="M20.6144 0.5H87.3855C98.1551 0.5 106.886 9.23045 106.886 20C106.886 30.7696 98.1551 39.5 87.3856 39.5H20.6145C9.84491 39.5 1.11444 30.7696 1.11444 20C1.11444 9.23045 9.84489 0.5 20.6144 0.5Z"
            stroke="#3E424A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5046 9.42375C23.6744 9.29285 23.8842 9.2123 24.0939 9.2123C24.4136 9.2123 24.7132 9.35327 24.903 9.605L30.6266 16.9959V22.8965L32.3347 24.6083C32.7242 25.001 32.7242 25.6454 32.3347 26.0381C31.9451 26.4308 31.3058 26.4308 30.9163 26.0381L28.6288 23.7222V17.6907L23.3248 10.8435V10.8335C22.9852 10.4005 23.0651 9.76611 23.5046 9.42375ZM35.3855 25.2961C35.2157 25.2535 35.0548 25.1653 34.9218 25.0312L32.914 23.0073C32.6843 22.7757 32.5844 22.4635 32.6243 22.1715V16.2608H32.5944L26.8408 8.82967C26.6882 8.63508 26.6203 8.39982 26.6308 8.16868C25.9752 8.05776 25.3016 8 24.6144 8C17.987 8 12.6144 13.3726 12.6144 20C12.6144 26.6274 17.987 32 24.6144 32C29.3409 32 33.4291 29.2675 35.3855 25.2961Z"
            fill="#F9FAFD"
          />
          <path
            d="M57.3856 16.8057L56.5798 16L53.3856 19.1943L50.1913 16L49.3856 16.8057L52.5798 20L49.3856 23.1943L50.1913 24L53.3856 20.8057L56.5798 24L57.3856 23.1943L54.1913 20L57.3856 16.8057Z"
            fill="#B1B3BC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M81.7756 27.201C81.6394 27.505 81.4467 27.7899 81.1971 28.0396L78.6894 30.5473C77.5922 31.6444 75.8134 31.6444 74.7162 30.5473L72.2084 28.0396C71.1113 26.9424 71.1112 25.1635 72.2084 24.0663L74.7162 21.5585C75.8133 20.4614 77.5923 20.4614 78.6894 21.5585L81.1971 24.0663C81.4467 24.3159 81.6395 24.6009 81.7756 24.9047L84.1989 24.9049L78.2596 14.6178C77.4838 13.2741 77.9442 11.5559 79.288 10.78L82.3592 9.00678C83.703 8.2309 85.4214 8.69136 86.1972 10.0351L95.0088 25.2972C95.7845 26.641 95.324 28.3591 93.9804 29.1351L90.909 30.9083C89.5653 31.6842 87.8469 31.2237 87.0712 29.8801L85.5245 27.2008L81.7756 27.201ZM80.2481 13.4698L89.0597 28.7319C89.2014 28.9775 89.5155 29.0616 89.7609 28.9197L92.8324 27.1466C93.0778 27.0047 93.1621 26.6909 93.0202 26.4454L84.2086 11.1831C84.0669 10.9376 83.7528 10.8535 83.5073 10.9953L80.4359 12.7685C80.1905 12.9102 80.1062 13.2243 80.2481 13.4698ZM79.5735 25.6899L77.0658 23.1822C76.8653 22.9817 76.5402 22.9817 76.3398 23.1822L73.8321 25.6899C73.6316 25.8904 73.6316 26.2154 73.8321 26.4159L76.3398 28.9235C76.5403 29.1242 76.8653 29.124 77.0659 28.9237L79.5736 26.416C79.7739 26.2154 79.7739 25.8904 79.5735 25.6899Z"
            fill="#F9FAFD"
          />
        </svg>
        <div className="flex-col items-center gap-lg max-w-[600px] w-full">
          <p className="display-xs text-center text-gray-white self-stretch">
            “Keywords AI legit has some of the best UX/DX I've ever seen in my
            life. I'm not even just saying that, I truly don't think I've ever
            integrated a product that was as easy.”
          </p>
          <div className="flex-col items-center gap-xxxs">
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

  const CallToActionSection = () => {
    return (
      <div className="flex-col p-xxxl pb-0 items-center gap-xl self-stretch sm:p-lg">
        <p className="sm:hidden max-w-[800px] text-center w-full display-xl gradient-text">
          Integrate in minutes. Available today.
        </p>
        <p className="hidden sm:block max-w-[800px] text-center w-full display-xs gradient-text">
          Integrate in minutes. Available today.
        </p>
        <div className="flex sm:flex-col items-center justify-center gap-xs">
          <Button
            text="Get started"
            variant="big-white"
            // onClick={() => (window.location.href = platformURL)}
            onClick={() => navigate("beta-access")}
            iconSize="sm"
            icon={Right}
          />
          <Button
            variant="big-black"
            text="Documentation"
            icon={Right}
            iconSize="sm"
            iconFill=""
            onClick={() => window.open("https://docs.keywordsai.co", "_blank")}
          />
        </div>
        <Subtract />
      </div>
    );
  };

  return (
    <Page>
      <IntroductionSection />
      <ColaborationSection />
      <FeatureSection />
      <CommentSesction />
      <AdvantagesSecctions />
      <CodePrewview />
      <CallToActionSection />
    </Page>
  );
}
