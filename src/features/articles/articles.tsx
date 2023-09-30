import {useContext} from 'react';
import { Container, FormGroup, Grid, Typography } from "@mui/material";
import { ArtcileAppBar } from "../../layout";
import LangaugeSelector from "./components/langauge_selector";
import { ThemeContext } from "../../context";

export default function Aritcles() {

  const { themeData: { direction } } = useContext(ThemeContext);

  return (
    <>
      <Container  dir={direction} maxWidth={false} disableGutters>
        <ArtcileAppBar />
        <Container sx={{ padding: 4 }} maxWidth={false}>
          <Grid container spacing={4}>
            <Grid justifyContent="flex-start" item container xs={12} md={9}>
              <div>Chips will be placed here</div>
            </Grid>
            <Grid container item xs={12} md={3}>
              <Typography variant="caption">
                Select Language:
              </Typography>
              <FormGroup>
                <LangaugeSelector />
              </FormGroup>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}


