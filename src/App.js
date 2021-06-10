import React from "react";
import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DarkToggler from "./components/DarkToggler";
import { lightTheme, darkTheme } from "./components/themes";
import ScrollToTop from "react-scroll-to-top";
import Stack from "./components/Stack";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Work from "./components/Work";
import AppBar from "./components/AppBar";
import Fade from "@material-ui/core/Fade";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  const [appTheme, setAppTheme] = useState(lightTheme);
  const [alertOpen, setAlertOpen] = useState(true);

  const [progress, setProgress] = React.useState(0);

  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    if (progress >= 100) {
      const timer = setInterval(() => {
        setIsDone(true);
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }
  }, [progress]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 25
      );
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const darkHandler = (state) => {
    setAppTheme(state["checkedA"] ? darkTheme : lightTheme);
  };

  return (
    <div className="App">
      {!isDone && <LoadingScreen progress={progress} />}
      {isDone && (
        <div>
          <AppBar />
          <ScrollToTop smooth color="#6f00ff" top="400" />

          <ThemeProvider theme={{ ...appTheme }}>
            <DarkToggler darkModeHandler={darkHandler} />
            <div className="alertDiv">
              <Fade in={true}>
                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  open={alertOpen}
                >
                  <Alert
                    onClose={() => {
                      setAlertOpen(false);
                    }}
                    variant="filled"
                    severity="info"
                  >
                    I'm opened to new projects (:
                  </Alert>
                </Snackbar>
              </Fade>
            </div>

            <Home />
            <About bgColor={appTheme.aboutBg} />
            <Work
              bgColor={appTheme.cards.bgColor}
              headerColor={appTheme.cards.headerColor}
            />
            <Stack bgColor={appTheme.aboutBg} />
            <Contact />
            <Footer bgColor={appTheme.footerBg} />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
}

export default App;
