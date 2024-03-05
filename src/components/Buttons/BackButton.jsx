import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import React from "react";
import { Left } from "../Icons";
export function BackButton({ text, link = -1 }) {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-start gap-[10px] self-stretch">
      <Button
        text={text}
        variant={"r18-black"}
        onClick={() => navigate(link)}
        icon={Left}
        iconPosition={"left"}
      />
    </div>
  );
}
