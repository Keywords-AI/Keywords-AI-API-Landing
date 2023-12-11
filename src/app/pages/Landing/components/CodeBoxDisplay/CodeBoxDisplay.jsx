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

      icon: Bash,
      code: `curl -X POST "https://keywordsapi.info/api/generate/"-H 
      "Content-Type: application/json"-H "Authorization: Api-Key {YOUR_ACCESS_TOKEN}"-d '{
        "messages":[{
            "role":"user",
            "content":"Hello"
        }],
        "stream": false,
        "max_tokens": 100,
        ... other parameters in similar format ...
    
    }'`,
    },
    {
      name: "Python",

      icon: Python,
      code: `import requests
import json
      
headers = {
'Content-Type': 'application/json',
'Authorization': 'Api-Key {YOUR_ACCESS_TOKEN}',
}
      
data = {
'messages': [{'role': 'user', 'content': 'Hello'}],
'stream': false,
'max_tokens': 100,
... other parameters in similar format ...
}
      
response = requests.post('https://keywordsapi.info/
api/generate/', headers=headers, json=data)`,
    },
    {
      name: "Javascript",
      icon: Javascript,
      code: `fetch('https://keywordsapi.info/api/generate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Api-Key {YOUR_ACCESS_TOKEN}',
        },
        body: JSON.stringify({
            messages: [{ role: 'user', content: 'Hello' }],
            'stream': false,
            'max_tokens': 100,
            ... other parameters in similar format ...
        }),
        })
        .then(response => response.json())
        .then(data => console.log(data));`,
    },
    {
      name: "PHP",
      icon: Php,
      code: `<?php
      $ch = curl_init();
      
      curl_setopt($ch, CURLOPT_URL, 'https://keywordsapi.info/api/generate/');
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          'Content-Type: application/json',
          'Authorization: Api-Key {YOUR_ACCESS_TOKEN}',
      ));
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(
          "messages" => array(array("role" => "user", "content" => "Hello")),
          "stream" => false,
          "max_tokens" => 100,
          ... other parameters in similar format ...
      )));
      
      $response = curl_exec($ch);
      curl_close($ch);
      ?>`,
    },
    {
      name: "Golang",
      icon: Golang,
      code: `package main
import (
          "bytes"
          "net/http"
      )
      
func main() {
          url := "https://keywordsapi.info/api/generate/"
          method := "POST"
      
          payload := []byte(\`{
              "messages": [{"role": "user", "content": "Hello"}],
              "stream": false,
              "max_tokens": 100,
              ... other parameters in similar format ...
          }\`)
      
          client := &http.Client{}
          req, err := http.NewRequest(method, url, bytes.NewBuffer(payload))
      
          if err != nil {
              panic(err)
          }
          req.Header.Add("Content-Type", "application/json")
          req.Header.Add("Authorization", "Api-Key {YOUR_ACCESS_TOKEN}")
      
          res, err := client.Do(req)
          defer res.Body.Close()
      }`,
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
          <ol className=" text-gray-white font-fira-code list-inside overflow-x-auto">
            {languages
              .find((language) => language.name === currentLanguage)
              .code.split(`\n`)
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
