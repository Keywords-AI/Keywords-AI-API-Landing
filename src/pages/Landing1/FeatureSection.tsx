import React from "react";
import cn from "src/utilities/ClassMerge";
import { ModelLogos } from "./ModelLogos";
import { BrandLogo, ScaleChart, SimpleImage } from "./OtherSVG";
import "./Landing.css";
import {
  ClearFilter,
  ExportLogs,
  SearchPrompt,
  ShowDisplay,
  ShowFilter,
  ShowLogs,
  ShowMetric,
  TimeLine,
  ViewLast,
  ViewMode,
  ViewNext,
} from "./ShortcutSVG";

type Props = {};

export default function FeatureSection({}: Props) {
  return (
    <div
      aria-label="frame 641"
      className="flex-col items-center gap-xl self-stretch bg-gray-black p-xxxl"
    >
      <div
        aria-label="frame 2079"
        className="flex flex-col items-center gap-sm self-stretch"
      >
        <div className="caption-cap gradient-text ">BUILT FOR DEVELOPERS</div>
        <div className=" max-w-[1000px] text-center w-full display-xl gradient-text">
          A unified developer platform for LLM applications
        </div>
      </div>
      <div
        aria-label="frame 1864"
        className="flex max-w-[1000px] justify-center items-start content-start gap-lg w-full flex-wrap "
      >
        <Card
          min_width={"min-w-[400px]"}
          max_width={"flex-1 max-w-[584px]"}
          heading="Leverage all best-in-class LLMs"
          subheading={
            "Use a unified interface for any model.\nSave hours from building custom API clients."
          }
        >
          <div className="flex  justify-center items-center content-center overflow-auto gap-md w-full flex-wrap rounded-lg min-w-[456px]">
            <ModelLogos.Openai />
            <ModelLogos.Ai_21_labs />
            <ModelLogos.Google />
            <ModelLogos.Mistral />
            <ModelLogos.Cohere />
            <ModelLogos.Pirate />
            <ModelLogos.Meta />
          </div>
        </Card>

        <Card
          min_width="min-w-[320px]"
          max_width="w-[384px]"
          heading="Built for scaling"
          subheading={
            "Bypass rate limits and make hundreds of concurrent calls.\nNo latency impact."
          }
        >
          <div className="flex justify-center items-center content-center gap-md self-stretch flex-wrap rounded-lg">
            <img src="/images/ScaleChart.png" className="w-[320px] " />
          </div>
        </Card>
        <Card
          min_width="min-w-[320px] w-[420px]"
          heading="From MVP to production"
          subheading={
            "One-stop DevOps platform for the entire LLM development lifecycle."
          }
        >
          <img
            src="/images/BrandLogo.png"
            className="w-[320px] h-[216px] max-w-[360px]"
          />
        </Card>
        <Card
          min_width="min-w-[320px]"
          max_width="flex-1"
          heading="Dead simple integration"
          subheading={
            "OpenAI style API call.\nLiterally 2 lines of change in your code."
          }
        >
          <SimpleImage />
        </Card>
        <Card
          min_width="min-w-[320px]"
          max_width="flex-1"
          reversed
          heading="Designed for for your keyboard"
          subheading={
            "Zoom through the platform by using quick keyboard shortcuts effortlessly."
          }
        >
          <div className="flex justify-center items-center content-center gap-lg  flex-wrap w-full ">
            <TimeLine />
            <ShowFilter />
            <ClearFilter />
            <ShowDisplay />
            <ShowMetric />
            <ExportLogs />
            <ShowLogs />
            <ViewMode />
            <SearchPrompt />
            <ViewNext />
            <ViewLast />
          </div>
        </Card>
      </div>
      <p className=" max-w-[800px]  w-full text-center text-gray-white display-sm">
        Beautiful, lightweight, and powerful.{" "}
        <span className="text-gray-4">
          Keywords AI is the only platform you need to launch and optimize your
          LLM application.
        </span>
      </p>
    </div>
  );
}

const Card = ({
  children,
  min_width,
  max_width = "",
  heading,
  subheading,
  reversed = false,
}) => {
  return (
    <div
      className={cn(
        "flex  p-lg  items-center gap-xl  border border-[color:var(--resend-com-linear-nero-nero,rgba(255,255,255,0.12))] [background:linear-gradient(0deg,#151519_0%,rgba(21,21,25,0.10)_40%,rgba(0,0,0,0.00)_100%,#000_100%)] rounded-lg border-solid landing-card",
        min_width,
        max_width,
        reversed ? "flex-col-reverse" : "flex-col"
      )}
    >
      {children}
      <div
        aria-label="card text"
        className=" flex-col justify-start items-center gap-xs max-w-[400px]"
      >
        <div className="self-stretch text-center text-white display-sm">
          {heading}
        </div>
        <div className="self-stretch text-center text-md-regular text-gray-4">
          {subheading}
        </div>
      </div>
    </div>
  );
};
