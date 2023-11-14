import { useNavigate } from "react-router-dom";
import { BackButton } from "src/app/components/BackButton";
import { Button } from "src/app/components/Button";

export function Unauthenticated() {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className="flex-col w-full max-w-[420px] items-center gap-md ">
        <div
          aria-label="section title"
          className="flex-col items-center gap-xxs self-stretch "
        >
          <div className="display-xs text-gray-white">
            Authentication Required
          </div>
          <div className="text-md-regular text-gray-4">
            Please log in to access this page.
          </div>
        </div>
        <div className="flex justify-center items-center gap-md self-stretch">
          <Button
            text="Login"
            variant={"secondary"}
            borderRadius="rounded-sm"
            arrow={false}
            onClick={() => {
              navigate("/login");
            }}
          />
          <Button
            text="Sign up"
            variant={"secondary-gray"}
            borderRadius="rounded-sm"
            arrow={false}
            onClick={() => {
              navigate("/signup");
            }}
            className="border border-solid border-gray-3"
          />
        </div>
      </div>
    </div>
  );
}
