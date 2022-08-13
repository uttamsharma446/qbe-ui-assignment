import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#4E5D78",
    },
    secondary: {
      main: "#14284B",
    },
  },
});

export const MuiThemeProvider: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
