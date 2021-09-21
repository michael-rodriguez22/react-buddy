import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";

const theme = {
  primary: "#FCE138",
  secondary: "#024E76",
  tertiary: "#39A6b2",
  light: "#ECECEC",
  dark: "#292828",
};

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
