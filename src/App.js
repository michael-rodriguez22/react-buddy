import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar, Sidebar } from "./components";
import GlobalStyle from "./globalStyles";

const theme = {
  primary: "#FCE138",
  secondary: "#024E76",
  tertiary: "#39A6b2",
  light: "#ECECEC",
  dark: "#292828",
};

function App() {
  const [sideOpen, toggleSideOpen] = useState(false);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Sidebar isOpen={sideOpen} toggle={toggleSideOpen} />
          <Navbar toggle={toggleSideOpen} />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
