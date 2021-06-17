import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";

function App() {
  const theme = unstable_createMuiStrictModeTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>Hello</ThemeProvider>
    </div>
  );
}

export default App;
