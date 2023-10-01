import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { Brightness4Sharp, Brightness7Sharp } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeContext } from "../context";
import FormGroup from "@mui/material/FormGroup";

export default function NewsAppBar() {
  const {
    themeData: { darkMode },
    onChangeThemeData,
  } = useContext(ThemeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News App
          </Typography>
          <FormGroup>
            <Switch
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: "white",
                },
                '&.Mui-checked .MuiSwitch-track': {
                  backgroundColor: 'white', // Set background color to green when checked
                },
                '&.MuiSwitch-track': {
                  backgroundColor: 'white', // Set background color to grey
                },       
              }}
              onChange={(_, checked) => onChangeThemeData("darkMode", checked)}
            />
          </FormGroup>
          {darkMode ? <Brightness4Sharp /> : <Brightness7Sharp />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
