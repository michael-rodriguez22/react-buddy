import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
