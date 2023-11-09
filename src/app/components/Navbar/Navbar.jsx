import cn from "../../utils/ClassMerge";
import { ArrowRight, Logo } from "../icons";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      aria-label="Navigation Bar"
      className="w-full flex px-[120px] py-xs justify-between items-center self-stretch bg-gray-black border-b border-gray-2 fixed"
    >
      <div className="flex max-w-[1200px] justify-between items-center flex-1 w-full">
        <div
          className="flex items-center gap-xxs self-stretch hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
          <p className="display-xs font-[600] text-center">Keywords AI</p>
        </div>
        <div className="flex items-center gap-xs">
          <button className="button-header" onClick={() => navigate("/")}>
            <span className={cn("text-sm-regular text-center flex-1", location.pathname == '/' ? 'text-gray-white': 'text-gray-4')}>Overview</span>
          </button>
          <button
            className="button-header"
            onClick={() => navigate("/pricing")}
          >
            <span className={cn("text-sm-regular text-center flex-1", location.pathname == '/pricing' ? 'text-gray-white': 'text-gray-4')}>Pricing</span>
          </button>
          <button
            className="button-header flex-1"
            onClick={() => navigate("/doc")}
          >
            <span className={cn("text-sm-regular text-center flex-1", location.pathname == '/doc' ? 'text-gray-white': 'text-gray-4')}>Docs</span>
          </button>
        </div>
        <div className="flex items-center gap-xs">
          <button className="button-header" onClick={() => navigate("/login")}>
            <span className="text-sm-regular text-center text-gray-4 flex-1">
              Log in
            </span>
          </button>
          <button
            className="button-primary bg-gray-white"
            onClick={() => navigate("/signup")}
          >
            <span className="text-sm-regular text-center text-gray-2 flex-1">
              Sign up
            </span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
