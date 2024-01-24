import { useNavigate } from "react-router-dom";
import { BackButton } from "src/components/BackButton";
import { Button } from "src/components/Button_old";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col w-full max-w-[420px] items-center gap-md ">
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-lg text-gray-white">404 - Not Found</div>
          <div className="text-md-regular text-gray-4">
            Couldn’t find what you were looking for.
          </div>
        </div>
        <div className="flex justify-center items-start gap-md self-stretch">
          <Button
            text="Back to home"
            variant={"secondary"}
            borderRadius="rounded-sm"
            arrow={false}
            onClick={() => {
              navigate("/");
            }}
          />
          <Button
            text="Bug report"
            variant={"secondary-gray"}
            borderRadius="rounded-sm"
            arrow={false}
            className="border border-solid border-gray-3"
          />
        </div>
      </div>
    </div>
  );
}
