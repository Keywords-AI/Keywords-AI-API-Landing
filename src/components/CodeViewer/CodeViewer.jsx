import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { DropDownMenu } from "../DropDownMenu";
import { Copy, Down } from "../Icons";
import { Button } from "../Buttons";
import { useState } from "react";
import "./CodeViewer.css";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { whiteDark, whiteDarkInit } from "@uiw/codemirror-theme-white/dark";
const languages = [
  {
    name: "Bash",
    value: "bash",
    extension: loadLanguage("shell"),
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
    value: "python",
    extension: loadLanguage("python"),
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
    value: "javascript",
    extension: loadLanguage("javascript"),
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
    value: "php",
    extension: loadLanguage("php"),
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
    value: "go",
    extension: loadLanguage("go"),
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

export function CodeViewer() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-col w-[800px] items-center rounded-md shadow-border shadow-gray-3 bg-gray-black">
      <div className="flex items-center justify-between self-stretch px-xs py-xxs rounded-t-md">
        <DropDownMenu
          open={open}
          setOpen={setOpen}
          trigger={
            <Button
              variant="small"
              icon={Down}
              iconSize="xxs"
              text={currentLanguage.name}
              onClick={() => setOpen(!open)}
            />
          }
          items={
            <>
              {languages.map((language, index) => (
                <DropdownMenuItem asChild key={index}>
                  <Button
                    variant="panel"
                    text={language.name}
                    onClick={() => setCurrentLanguage(language)}
                  />
                </DropdownMenuItem>
              ))}
            </>
          }
        />
        <Button
          variant="small"
          text="Copy code"
          icon={Copy}
          iconSize="sm"
          onClick={() => {
            navigator.clipboard.writeText(currentLanguage.code);
          }}
        />
      </div>
      <div className="h-[1px] self-stretch bg-highlight"></div>
      <div className="flex p-xs self-stretch w-full rounded-b-md ">
        <CodeMirror
          value={currentLanguage.code}
          editable={false}
          className="w-full"
          height="100%"
          extensions={currentLanguage.extension}
          theme={whiteDarkInit({
            settings: {
              purple: "#6483F0",
              white: "#F9FAFC",
              gray: "#B1B3BC",
              black: "#05050A",
              lineHighlight: "transparent",
              selection: "#3E424A",
              fontFamily: "monospace",
              lineHeight: "1",
            },
          })}
        />
      </div>
    </div>
  );
}
