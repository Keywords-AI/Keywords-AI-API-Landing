import React from 'react';
import './SmallCard.css';
export function SmallCard({ linkIcon, title, content }) {
  return (
    <div className="gradient-out rounded-xl p-[1px]">
      <div className="w-[382px] min-w-[358px] rounded-xl flex flex-col px-lg py-md items-start gap-sm gradient-in">
        {linkIcon}
        <div className="flex flex-col items-start gap-xxs self-stretch">
          <p className="display-xs">{title}</p>
          <p className="text-sm-regular">{content}</p>
        </div>
      </div>
    </div>
  );
}
