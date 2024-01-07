const selectEndpoint = () => {
  const envMode = import.meta.env.MODE;
  if (envMode === "development") {
    return "https://platform-test.keywordsai.co";
  }
  currentAddress = window.location.hostname;
  if (currentAddress === "https://test.keywordsai.co") {
    return "https://platform-test.keywordsai.co";
  } else if (currentAddress === "https://keywordsai.co") {
    return "https://platform.keywordsai.co";
  }
  return "https://platform-test.keywordsai.co";
};
export const platformURL = selectEndpoint();
