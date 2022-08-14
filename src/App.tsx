import React from "react";
import { Layout } from "./layout/Layout";
import { MuiThemeProvider } from "./theme/Theme";

function App() {
  return (
    <MuiThemeProvider>
      <Layout />
    </MuiThemeProvider>
  );
}

export default App;
