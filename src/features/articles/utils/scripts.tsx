export const languageOptions = [
  {
    languageCode: "en",
    language: "English",
  },
  {
    languageCode: "ar",
    language: "Arabic",
  },
];

export const articleSources = [
  "apple",
  "meta",
  "netflix",
  "google",
  "twitter",
  "tesla",
];

/**
 * @description Given the query params as an object it returns query string with URL encoded values
 * @param queryParams - Record<String,string|number|boolea> queryParams object to get the quertString
 * @returns strigified query
 */
export const getQueryString = (
  queryParams: Record<string, string | number | boolean>
) => {
  return Object.entries(queryParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export const changeDocumentLanguage = (languageCode: string) => {
  const htmlElement = document.querySelector("html") as HTMLElement;

  htmlElement.setAttribute("lang", languageCode);
};

export const fallbackURL = 'https://unsplash.com/photos/aId-xYRTlEc';