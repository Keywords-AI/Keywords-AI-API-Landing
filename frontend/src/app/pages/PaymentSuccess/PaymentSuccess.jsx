import { BackButton } from '../../components/BackButton/BackButton';
import { ArrowRight, CircleTick, Subtract } from '../../components/icons';
import './PaymentSuccess.css';

export function PaymentSuccess() {
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Home" link={-1} />
      <div className="flex-col  max-w-[420px] items-center gap-md ">
        <CircleTick />
        <div aria-label='section title' className="flex-col items-center gap-xxs self-stretch ">
          <div className="display-xs text-gray-white">
            Subscription Successful!
          </div>
          <div className="text-md-regular text-gray-white">
            All set! Your subscription went through smoothly.
          </div>
        </div>
        <button className="button-cr bg-gray-white text-sm-regular text-center text-gray-2">
          <span className="flex flex-1">Request signed DPA</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
