import { BackButton } from "src/app/components/BackButton";

export function ConfirmRegistration() {
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col  max-w-[420px] items-center gap-md ">
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-xs text-gray-white">
            Registration Confirmation
          </div>
          <div className="text-md-regular text-gray-4">
            Please confirm your registration.
          </div>
        </div>
        <div className="flex justify-center items-center gap-md self-stretch">
          <button className="button-cr bg-gray-white text-gray-black text-sm-regular text-center">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
