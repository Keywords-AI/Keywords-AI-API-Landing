import "./Dpa.css";
import { Page } from "src/components/Page";
import { Button } from "src/components/Button_old";

export function Dpa() {
  const Data = {
    title: "Data Processing Agreement",
    date: "Updated 10/19/2023",
    content: (
      <p className="Dpa text-sm-regular text-gray-4">
        To use our API services, you're required to accept the Keywords AI Data
        Processing Agreement (DPA), available via the button below. By agreeing
        to our Terms of Service, you're also automatically consenting to our
        DPA, eliminating the need for a separate signature.
      </p>
    ),
  };
  return (
    <Page>
      <div className="flex-col p-xl pb-xxxl items-center gap-lg flex-1 self-stretch">
        <div className="flex-col gap-lg items-start w-[800px]">
          <div className="flex-col items-start gap-xxs w-[800px]">
            <div className="display-sm">{Data.title}</div>
            {Data.date && (
              <div className="text-sm-regular text-gray-4">{Data.date}</div>
            )}
          </div>
          <div className="flex-col items-start self-stretch gap-md">
            {Data.content}

            <Button
              text={"Request signed DPA"}
              variant={"secondary"}
              borderRadius="rounded-sm"
              onClick={() => {
                window.location.href = "mailto:team@keywordsai.co";
              }}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
