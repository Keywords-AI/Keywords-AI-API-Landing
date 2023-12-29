import { SmallDot } from "../icons-old";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
export function Footer() {
  const navigate = useNavigate();
  return (
    <div
      aria-label="Footer"
      className="flex w-full px-xxxl py-sm pt-0 flex-col items-center gap-xxs bg-gray-black sm:pt-0 sm:px-lg sm:pb-xxs"
    >
      <div className="line"></div>
      <div className="hidden sm:flex w-full justify-center caption text-gray-4">
        Copyright © 2023 Keywords AI Inc. All rights reserved.
      </div>
      <div className="flex justify-between items-start w-full max-w-[1200px] sm:hidden">
        <div className="caption text-gray-4 sm:hidden">
          {"Copyright © 2023 Keywords AI Inc. All rights reserved."}
        </div>
        <div className="flex items-center gap-xxs text-gray4 sm:hidden">
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/terms-of-use")}
          >
            Terms of Use
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dpa")}
          >
            DPA
          </span>
          <SmallDot fill="fill-gray-4" />
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("mailto:team@keywordsai.co")}
          >
            Contact Us
          </span>
        </div>
      </div>
    </div>
  );
}
