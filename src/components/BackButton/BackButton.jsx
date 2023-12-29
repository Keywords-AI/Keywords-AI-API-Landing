import { useNavigate } from "react-router-dom";
import { Button } from "../Button_old";
export function BackButton({ text, link = -1 }) {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-start gap-[10px] self-stretch">
      <Button
        text={text}
        variant={"header"}
        arrowDirection={"left"}
        onClick={() => navigate(link)}
      />
    </div>
  );
}
