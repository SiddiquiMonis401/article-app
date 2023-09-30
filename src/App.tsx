import  { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Card,
  CardContent,
  Switch,
  Typography,
  createTheme,
} from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Switch onChange={() => setDarkMode((prev) => !prev)} />
      <Card >
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Testing theme
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default App;
