import { BackButton } from "../../components/BackButton/BackButton";

export function Unauthenticated() {
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col w-full max-w-[420px] items-center gap-md ">
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-xs text-gray-white">
            Authentication Required
          </div>
          <div className="text-md-regular text-gray-4">
            Please log in to access this page.
          </div>
        </div>
        <div className="flex justify-center items-center gap-md self-stretch">
          <button className="button-cr bg-gray-white text-gray-black text-sm-regular text-center">
            Login
          </button>
          <button className="button-secondary-gray text-sm-regular text-center text-gray-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
