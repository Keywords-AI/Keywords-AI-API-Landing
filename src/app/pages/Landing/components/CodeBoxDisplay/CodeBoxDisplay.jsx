import { CopyCode } from "../../../../components/CopyCode";
import { Divider } from "../../../../components/Divider";
import { ArrowDown } from "../../../../components/icons";
import styles from "./CodeBoxDisplay.css";

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
        <div className="flex items-start gap-sm self-stretch">
          <p className=" text-gray-4 text-sm-regular text-right font-fira-code whitespace-pre-wrap">
            1{"\n"}2{"\n"}3{"\n"}4{"\n"}5{"\n"}6{"\n"}7{"\n"}8{"\n"}9{"\n"}10
          </p>
          <p className="text-gray-white text-sm-regular font-fira-code whitespace-pre-wrap">{`curl -X POST "https://keywordsapi.info/api/generate/" \

-H "Content-Type: application/json" \

-H "Authorization: Api-Key {YOUR_ACCESS_TOKEN}" \

-d '{
"messages":[{
"role":"user",
"content":"Hello"
}],
"model":"keywordsai"
}'`}</p>
        </div>
      </div>
    </div>
  );
}
