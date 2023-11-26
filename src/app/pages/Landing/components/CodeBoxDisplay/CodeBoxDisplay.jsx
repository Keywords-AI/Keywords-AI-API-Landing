import { CopyCode } from "../../../../components/CopyCode";
import { ArrowDown } from "../../../../components/icons";
import "./CodeBoxDisplay.css";
export function CodeBoxDisplay() {
  return (
    <div className="flex-col max-w-[800px] items-center w-full rounded-lg border border-gray-3 bg-gradient-in shadow-purple">
      <div
        aria-label="header"
        className="flex py-sm px-md justify-between items-center self-stretch"
      >
        <div className="flex justify-center items-center gap-xxs">
          <p className="text-sm text-center text-gray-4">bash</p>
          <ArrowDown />
        </div>
        <CopyCode />
      </div>

      <div
        aria-label="content"
        className="border-t border-gray-3 flex-col p-md items-start gap-[10px] self-stretch"
      >
        <div className=" code flex items-start gap-sm self-stretch">
          <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
            <li>curl -X POST "https://keywordsapi.info/api/generate/" \</li>
            <li>-H "Content-Type: application/json" \</li>
            <li>-H "Authorization: Api-Key {"{YOUR_ACCESS_TOKEN}"}" \</li>
            <li>{`-d '{`}</li>
            <li>{`"messages":[{`}</li>
            <li>"role":"user",</li>
            <li>"content":"Hello"</li>
            <li>{`}]`}</li>
            <li>"model":"keywordsai"</li>
            <li>{`}'`}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
