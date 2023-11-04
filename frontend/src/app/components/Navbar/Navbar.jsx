import { ArrowRight, Logo } from '../icons';
import './Navbar.css';

export function Navbar({}) {
  return (
    <div
      aria-label="Navigation Bar"
      className="w-full flex px-[120px] py-xs justify-between items-center self-stretch bg-gray-black border-b border-gray-2"
    >
      <div className="flex items-center gap-xxs self-stretch">
        <Logo />
        <p className="display-xs font-[600] text-center">Keywords AI</p>
      </div>
      <div className="flex items-center gap-xs">
        <button className="button-header">
          <span className="text-sm text-center flex-1">Overview</span>
        </button>
        <button className="button-header">
          <span className="text-sm text-center flex-1">Pricing</span>
        </button>
        <button className="button-header flex-1">
          <span className="text-sm text-center">Docs</span>
        </button>
      </div>
      <div className="flex items-center gap-xs">
        <button className="button-header">
          <span className="text-sm text-center text-gray-4 flex-1">Log in</span>
        </button>
        <button className="button-primary bg-gray-white">
          <span className="text-sm text-center text-gray-2 flex-1">
            Sign up
          </span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
