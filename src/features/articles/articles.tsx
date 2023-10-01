import {useContext, useState} from 'react';
import { SelectProps } from "@mui/base/Select";
import { Container, FormGroup, Grid, Typography } from "@mui/material";
import { ArtcileAppBar } from "../../layout";
import LangaugeSelector from "./components/langauge_selector";
import { ThemeContext } from "../../context";
import ArticleSources from './components/article_sources';
import { languageOptions } from './utils/scripts';

export default function Aritcles() {

  
  const { onChangeThemeData, themeData: { direction } } = useContext(ThemeContext);

  const [articleSource, setArticleSource] = useState('apple');

  
  const [{languageCode: enCode},{languageCode: arCode}] = languageOptions;

  const [language, setlanguage] = useState<string>(
    direction === 'ltr' ? enCode : arCode 
  );

  const onArticleSourceChange = (source: string) => {
    if(source !== articleSource) {
      setArticleSource(source);
    }
  }

  const onLanguageChange:SelectProps<string, false>['onChange'] = (_, languageCode) => {
    if (languageCode) {
      setlanguage(languageCode);
      onChangeThemeData(
        "direction",
        languageCode === "ar" ? "rtl" : "ltr"
      );
    }
  } 

  return (
    <>
      <Container  dir={direction} maxWidth={false} disableGutters>
        <ArtcileAppBar />
        <Container  sx={{ padding: 4 }} maxWidth={false}>
          <Grid container spacing={4}>
            <Grid alignItems="center" justifyContent="flex-start" item container xs={12} md={9}>
              <>
              <ArticleSources onSelectArticleSource={onArticleSourceChange} articleSource={articleSource} />
              </>
            </Grid>
            <Grid container item xs={12} md={3}>
              <Typography variant="caption">
                Select Language:
              </Typography>
              <FormGroup>
                <LangaugeSelector languageSelected={language!} onSelectLangauge={onLanguageChange} />
              </FormGroup>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}


