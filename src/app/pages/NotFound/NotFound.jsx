import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Home" link={"/"} />
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
          <button
            className="button-cr bg-gray-white text-gray-black text-sm-regular text-center"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
          <button className="button-secondary-gray text-sm-regular text-center text-gray-white">
            Bug report
          </button>
        </div>
      </div>
    </div>
  );
}
