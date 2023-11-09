import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../icons";
export function BackButton({ text, link = -1 }) {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-start gap-[10px] self-stretch">
      <button className="button-header" onClick={() => navigate(link)}>
        <ArrowLeft />
        <span className="flex-1 text-sm-regular">{text}</span>
      </button>
    </div>
  );
}
