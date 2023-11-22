import React from "react";
import "./SmallCard.css";
export function SmallCard({ linkIcon, title, content }) {
  return (
    <div className="flex-col min-w-[280px] max-w-[320px] items-center gap-sm flex-1">
      <div className="SmallCard-box-shadow flex p-[1px] rounded-xl bg-gradient-out">
        <div className="flex w-[55px] h-[55px] p-sm justify-center items-center gap-[10px] rounded-xl bg-gradient-in ">
          {linkIcon}
        </div>
      </div>
      <div className="flex-col items-center gap-xs self-stretch">
        <p className="display-xs text-center text-gray-white">{title}</p>
        <p className="text-md-regular text-center text-gray-4 self-stretch">
          {content}
        </p>
      </div>
    </div>
  );
}
