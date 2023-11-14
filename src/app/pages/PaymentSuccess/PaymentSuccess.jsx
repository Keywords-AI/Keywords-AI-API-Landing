import { BackButton } from "src/app/components/BackButton/BackButton";
import { CircleTick } from "src/app/components/icons";
import "./PaymentSuccess.css";
import { Button } from "src/app/components/Button";

export function PaymentSuccess() {
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col  max-w-[420px] items-center gap-md ">
        <CircleTick />
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-xs text-gray-white">
            Subscription Successful!
          </div>
          <div className="text-md-regular text-gray-white">
            All set! Your subscription went through smoothly.
          </div>
        </div>

        <Button
          text={"Retrieve API keys"}
          variant={"secondary"}
          borderRadius="rounded-sm"
        />
      </div>
    </div>
  );
}
