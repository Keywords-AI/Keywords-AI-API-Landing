import { ArrowRight, Logo } from '../icons';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export function Navbar({}) {
  const navigate = useNavigate();
  return (
    <div
      aria-label="Navigation Bar"
      className="w-full flex px-[120px] py-xs justify-between items-center self-stretch bg-gray-black border-b border-gray-2 fixed z-50 "
    >
      <div
        className="flex items-center gap-xxs self-stretch hover:cursor-pointer"
        onClick={() => navigate('/')}
      >
        <Logo />
        <p className="display-xs font-[600] text-center">Keywords AI</p>
      </div>
      <div className="flex items-center gap-xs">
        <button className="button-header" onClick={() => navigate('/')}>
          <span className="text-sm-regular text-center flex-1">Overview</span>
        </button>
        <button className="button-header" onClick={() => navigate('/pricing')}>
          <span className="text-sm-regular text-center flex-1">Pricing</span>
        </button>
        <button
          className="button-header flex-1"
          onClick={() => navigate('/doc')}
        >
          <span className="text-sm-regular text-center">Docs</span>
        </button>
      </div>
      <div className="flex items-center gap-xs">
        <button className="button-header">
          <span className="text-sm-regular text-center text-gray-4 flex-1">Log in</span>
        </button>
        <button className="button-primary bg-gray-white">
          <span className="text-sm-regular text-center text-gray-2 flex-1">
            Sign up
          </span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
