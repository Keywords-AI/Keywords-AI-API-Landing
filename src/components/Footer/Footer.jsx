import { useState } from "react";
import { LinkedIn, Logo, Twitter, Discord } from "../Icons";
import { SmallDot } from "../icons-old";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
export function Footer() {
  const navigate = useNavigate();
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);

  // Handlers for Twitter
  const handleTwitterEnter = () => setIsTwitterHovered(true);
  const handleTwitterLeave = () => setIsTwitterHovered(false);

  // Handlers for LinkedIn
  const handleLinkedInEnter = () => setIsLinkedInHovered(true);
  const handleLinkedInLeave = () => setIsLinkedInHovered(false);

  // Handlers for Discord
  const handleDiscordEnter = () => setIsDiscordHovered(true);
  const handleDiscordLeave = () => setIsDiscordHovered(false);
  return (
    <div
      aria-label="Footer"
      className="flex flex-col flex-1 pb-lg items-center gap-lg self-stretch bg-gray-black sm:pt-0 sm:px-lg sm:pb-xxs "
    >
      <div className="line bg-gray-2"></div>
      {/* <div className="hidden sm:flex w-full justify-center caption text-gray-4">
        Copyright © 2024 Keywords AI Inc. All rights reserved.
      </div> */}
      <div className="flex flex-1 h-fit max-w-[1200px] w-full justify-between sm:gap-xxs">
        <div className="flex flex-col justify-between items-start self-stretch">
          <div className="flex items-center gap-xxs">
            <Logo />
            <div className="text-sm-md text-gray-4 sm:hidden">
              {"Copyright © 2024 Keywords AI Inc. All rights reserved."}
            </div>
          </div>
          <div className="flex flex-col w-[12px] h-[9.289px] items-start gap-[10px]"></div>
          <div className="flex sm:flex-col flex-row items-start gap-sm">
            <a
              href="https://www.linkedin.com/company/keywordsai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
              onMouseEnter={handleLinkedInEnter}
              onMouseLeave={handleLinkedInLeave}
            >
              <LinkedIn active={isLinkedInHovered} />
            </a>
            <a
              href="https://twitter.com/keywordsai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
              onMouseEnter={handleTwitterEnter}
              onMouseLeave={handleTwitterLeave}
            >
              <Twitter active={isTwitterHovered} />
            </a>
            <a
              href="https://discord.gg/rez3qVGu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row w-[16px] h-[16px] justify-center items-center gap-[10px]"
              onMouseEnter={handleDiscordEnter}
              onMouseLeave={handleDiscordLeave}
            >
              <Discord active={isDiscordHovered} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap w-[468px] items-center content-center gap-y-sm gap-x-md">
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Product </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Resources </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-gray-white text-sm-md">Developers </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                // href="https://docs.keywordsai.co/get-started/introduction"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Features
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <span
                className="text-gray-4 text-sm-regular hover:text-gray-white"
                onClick={() => window.open("mailto:team@keywordsai.co")}
                style={{ cursor: "pointer" }}
              >
                Contact Us
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/get-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Docs
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/integration/supported-models"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Models
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://keywordsai.co/#/privacy-policy"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Privacy Policy
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://discord.gg/rez3qVGu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Community
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://keywordsai.co/#/pricing"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Pricing
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://keywordsai.co/#/terms-of-use"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Terms of Use
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://docs.keywordsai.co/platform-features/api-keys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  API
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                // href="https://docs.keywordsai.co/get-started/introduction"
                // target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Changelog
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a href="https://keywordsai.co/#/dpa" rel="noopener noreferrer">
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  DPA
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://status.keywordsai.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  Status
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0"></div>
          <div className="flex flex-col w-[140px] items-start gap-[10px] shrink-0">
            <div className="flex items-center justify-center gap-[10px]">
              <a
                href="https://comply.dog/yc5bmv#checklist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-4 text-sm-regular hover:text-gray-white">
                  GDPR
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center gap-xxs text-gray4 sm:hidden">
          <span
            className="caption text-gray-4"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://comply.dog/yc5bmv#checklist")}
          >
            GDPR
          </span>
          <SmallDot fill="fill-gray-4" />
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
        </div> */}
    </div>
  );
}
