import { ArrowRight, Logo } from "../icons-old";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AuthContext from "src/authentication/AuthContext";
import { logout } from "src/utilities/Authentication";
import cn from "src/utilities/ClassMerge";
import { Button } from "../Buttons";
import { Right } from "../Icons";
import { platformURL } from "src/utilities/platformURL";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = React.useContext(AuthContext);
  return (
    <div
      aria-label="Navigation Bar"
      className=" w-full flex-col sm:flex-row px-xxxl sm:px-lg py-xs sm:py-sm justify-between items-center bg-gray-black bg-opacity-0 backdrop-blur-[3px] border-b border-gray-2 fixed z-10"
    >
      <div className="flex max-w-[1200px] justify-between items-center flex-1 w-full">
        <div
          className="flex items-center gap-xxs self-stretch hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
          <p className="display-xs font-[600] text-center">Keywords AI</p>
        </div>
        {
          <div className="sm:hidden flex items-center gap-xs">
            <Button
              text="Overview"
              variant="header"
              onClick={() => navigate("/")}
              active={location.pathname == "/"}
            />
            <Button
              text="Pricing"
              variant="header"
              onClick={() => navigate("/pricing")}
              active={location.pathname == "/pricing"}
            />

            <Button
              text="Docs"
              variant="header"
              onClick={() =>
                (window.location.href = "https://docs.keywordsai.co")
              }
            />
            {/*
            <Button
              text="Models"
              variant="header"
              // onClick={() => navigate("/componentgrid")}
            />
            <Button
              text="Changelog"
              variant="header"
              // onClick={() => navigate("/changelog")}
              active={location.pathname == "/changelog"}
            /> */}
          </div>
        }

        <div className="sm:hidden flex items-center gap-xs">
          <Button
            text="Log in"
            variant="header"
            onClick={() => {
              window.location.href = platformURL + "/login";
            }}
            // onClick={() => navigate("beta-access")}
          />
          <Button
            text="Get started"
            variant="r18-white"
            icon={Right}
            // onClick={() => (window.location.href = platformURL + "/login")}
            onClick={() => navigate("beta-access")}
          />
        </div>
      </div>
    </div>
  );
}
