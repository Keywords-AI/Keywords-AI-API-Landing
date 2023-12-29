import { LanguageSelect } from "src/app/components/LanguageSelect";
import { CopyCode } from "../../../../components/CopyCode";
import {
  Bash,
  Golang,
  Javascript,
  Php,
  Python,
} from "../../../../components/icons-old";
import "./CodeBoxDisplay.css";
import { useState } from "react";
import { CodeViewer } from "src/app/components/CodeViewer";
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
      <CodeViewer />
    </div>
  );
}
