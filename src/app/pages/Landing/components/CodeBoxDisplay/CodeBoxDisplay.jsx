import { LanguageSelect } from "src/app/components/LanguageSelect";
import { CopyCode } from "../../../../components/CopyCode";
import {
  Bash,
  Golang,
  Javascript,
  Php,
  Python,
} from "../../../../components/icons";
import "./CodeBoxDisplay.css";
import { useState } from "react";
export function CodeBoxDisplay() {
  const [currentLanguage, setCurrentLanguage] = useState("Bash");
  const languages = [
    {
      name: "Bash",
      content: (
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
      ),
      icon: <Bash />,
      code: `curl -X POST "https://keywordsapi.info/api/generate/" \``,
    },
    {
      name: "Python",
      content: (
        <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
          <li>Python -X POST "https://keywordsapi.info/api/generate/" \</li>
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
      ),
      icon: <Python />,
      code: `curl -X POST "https://keywordsapi.info/api/generate/" \``,
    },
    {
      name: "Javascript",
      content: (
        <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
          <li>Javascript -X POST "https://keywordsapi.info/api/generate/" \</li>
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
      ),
      icon: <Javascript />,
      code: `curl -X POST "https://keywordsapi.info/api/generate/" \``,
    },
    {
      name: "PHP",
      content: (
        <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
          <li>PHP -X POST "https://keywordsapi.info/api/generate/" \</li>
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
      ),
      icon: <Php />,
      code: `curl -X POST "https://keywordsapi.info/api/generate/" \``,
    },
    {
      name: "Golang",
      content: (
        <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
          <li>Golang -X POST "https://keywordsapi.info/api/generate/" \</li>
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
      ),
      icon: <Golang />,
      code: `curl -X POST "https://keywordsapi.info/api/generate/" \``,
    },
  ];
  return (
    <div className="flex-col max-w-[800px] items-center w-full rounded-lg border border-gray-3 bg-gradient-in shadow-purple">
      <div
        aria-label="header"
        className="flex py-sm px-md justify-between items-center self-stretch"
      >
        <LanguageSelect
          languages={languages}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <CopyCode
          code={
            languages.find((language) => language.name === currentLanguage).code
          }
        />
      </div>

      <div
        aria-label="content"
        className="border-t border-gray-3 flex-col p-md items-start gap-[10px] self-stretch"
      >
        <div className=" code flex items-start gap-sm self-stretch">
          {
            languages.find((language) => language.name === currentLanguage)
              .content
          }
        </div>
      </div>
    </div>
  );
}
