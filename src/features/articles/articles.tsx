import { useCallback, useContext, useMemo, useState } from "react";
import { SelectProps } from "@mui/base/Select";
import {
  Container,
  FormGroup,
  Grid,
} from "@mui/material";
import { ArtcileAppBar } from "../../layout";
import LangaugeSelector from "./components/langauge_selector";
import { ThemeContext } from "../../context";
import ArticleSources from "./components/article_sources";
import { getQueryString, languageOptions } from "./utils/scripts";
import useRequest from "./hooks/use_request_hook";
import { ArtcileAPIResponse } from "../../types";
import ArticlesList from "./components/articles_list";
import Loader from "./components/loader";

export default function Aritcles() {
  const {
    onChangeThemeData,
    themeData: { direction },
  } = useContext(ThemeContext);
  const [{ languageCode: enCode }, { languageCode: arCode }] = languageOptions;

  const [articleSource, setArticleSource] = useState("apple");
  const [language, setlanguage] = useState<string>(
    direction === "ltr" ? enCode : arCode
  );

  const onArticleSourceChange = useCallback(
    (source: string) => {
      if (source !== articleSource) {
        setArticleSource(source);
      }
    },
    [articleSource]
  );

  const languageChangeCallback: SelectProps<string, false>["onChange"] = (
    _,
    languageCode
  ) => {
    if (languageCode) {
      setlanguage(languageCode);
      onChangeThemeData("direction", languageCode === "ar" ? "rtl" : "ltr");
    }
  };

  const onLanguageChange = useCallback(languageChangeCallback, [
    onChangeThemeData,
  ]);


  const queryString = useMemo(() => getQueryString({
    q: articleSource,
    apiKey: process.env.REACT_APP_NEWS_APP_API_KEY ?? '', //Make sure you have this in your .env 
    language: language,
    from: new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString(),
  }), [articleSource, language]);

  const { isLoading, isError, response } = useRequest<ArtcileAPIResponse>({
    endpoint: "https://newsapi.org/v2/everything",
    queryParams: queryString, 
    requestOption: { method: "GET" },
  });


  return (
    <>
      <Container dir={direction} maxWidth={false} disableGutters>
        <ArtcileAppBar />
        <Container sx={{ padding: 4 }} maxWidth={false}>
          <Grid container spacing={4}>
            <Grid
              alignItems="center"
              item
              container
              sx={{
                "&.MuiGrid-item": {
                  paddingLeft: 4,
                  paddingRight: 4,
                },
              }}
              xs={12}
              md={6}
            >
              <>
                <ArticleSources
                  onSelectArticleSource={onArticleSourceChange}
                  articleSource={articleSource}
                />
              </>
            </Grid>
            <Grid
              sx={{ justifyContent: "flex-end" }}
              container
              item
              xs={12}
              md={6}
            >
              <FormGroup>
                <LangaugeSelector
                  languageSelected={language!}
                  onSelectLangauge={onLanguageChange}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ height: "100vh" }}>
            {isLoading && <Loader />}
            {!isLoading && !isError && response && (
              <ArticlesList articles={response.articles} />
            )}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
