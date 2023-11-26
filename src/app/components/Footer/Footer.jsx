import { SmallDot } from "../icons";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
export function Footer() {
  const navigate = useNavigate();
  return (
    <div
      aria-label="Footer"
      className="flex w-full px-xxxl py-sm pt-0 flex-col items-center gap-xxs bg-gray-black "
    >
      <div className="line"></div>
      <div className="hidden sm:flex self-stretch caption text-gray-4">Copyright © 2023 Keywords AI Inc. All rights reserved.</div>
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
