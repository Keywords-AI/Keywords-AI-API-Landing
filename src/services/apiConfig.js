import { retrieveAccessToken } from "src/utilities/authorization";
const selectEndpoint = () => {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:8000/";
  } else if (
    window.location.hostname === "platform-test.keywordsai.co" ||
    window.location.hostname === "keywords-platform.web.app"
  ) {
    return "https://api-test.keywordsai.co/";
  } else if (window.location.hostname === "platform.keywordsai.co") {
    return "https://api.keywordsai.co/";
  }
  return "https://api.keywordsai.co/";
};

const apiConfig = {
  apiURL: selectEndpoint(), // For Raymond or anyone who has setup backend local server
  //  apiURL: "https://api-test.keywordsai.co/", // For anyone who doesn't have backend local server
  frontendURL: window.location.origin,
  apiKey: "your-api-key",
  timeout: 5000,
};

export default apiConfig;

export const keywordsFetch = async ({
  path,
  host = apiConfig.apiURL,
  data,
  method = "GET",
  auth = true,
  credentials = "same-origin",
  dispatch=()=>{},
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (auth) {
      headers["Authorization"] = `Bearer ${retrieveAccessToken()}`;
    }
    const callBody = {
      method: method,
      headers,
      credentials: credentials,
    };
    if (method !== "GET") {
      callBody.body = JSON.stringify(data);
    }
    return fetch(host + path, callBody);
  } catch (error) {
    throw error;
  }
};
