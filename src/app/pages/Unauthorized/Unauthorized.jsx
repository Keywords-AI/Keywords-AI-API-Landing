import { BackButton } from "src/app/components/BackButton/BackButton";

export function Unauthorized() {
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col w-full  max-w-[420px] items-center gap-md ">
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-xs text-gray-white">
            Get Started with a Plan
          </div>
          <div className="text-md-regular text-gray-4">
            You have not purchased access to API keys.
          </div>
        </div>
        <div className="flex justify-center items-center gap-md self-stretch">
          <button className="button-cr bg-gray-white text-gray-black text-sm-regular text-center">
            View pricing plans
          </button>
        </div>
      </div>
    </div>
  );
}
