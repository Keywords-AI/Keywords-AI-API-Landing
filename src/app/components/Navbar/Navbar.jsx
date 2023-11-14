import cn from "src/app/utils/ClassMerge";
import { ArrowRight, Logo } from "../icons";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AuthContext from "src/app/authentication/AuthContext";
import { logout } from "src/app/authentication/Authentication";
import { Button } from "../Button";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = React.useContext(AuthContext);
  return (
    <div
      aria-label="Navigation Bar"
      className="w-full flex-col px-[120px] py-xs justify-between items-center bg-gray-black border-b border-gray-2 fixed"
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
          <Button
            text="Overview"
            variant="header"
            arrow={false}
            onClick={() => navigate("/")}
            textClassName={cn(
              location.pathname == "/" ? "text-gray-white" : "text-gray-4"
            )}
          />
          <Button
            text="Pricing"
            variant="header"
            arrow={false}
            onClick={() => navigate("/pricing")}
            textClassName={cn(
              location.pathname == "/pricing"
                ? "text-gray-white"
                : "text-gray-4"
            )}
          />

          <Button
            text="Docs"
            variant="header"
            arrow={false}
            onClick={() => navigate("/componentgrid")}
            textClassName={cn(
              location.pathname == "/componentgrid"
                ? "text-gray-white"
                : "text-gray-4"
            )}
          />
        </div>
        {user ? (
          <button
            className="button-header group hover:bg-gray-3 hover:text-gray-white"
            onClick={() => {
              logout();
              window.location.reload();
            }}
          >
            <span className="text-sm-regular text-center text-gray-4 flex-1 group-hover:text-gray-white">
              Log out
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-xs">
            <Button
              text="Log in"
              variant="header"
              arrow={false}
              onClick={() => navigate("/login")}
            />
            <Button
              text="Sign up"
              variant="secondary"
              onClick={() => navigate("/signup")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
