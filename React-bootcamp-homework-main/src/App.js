import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import reactLogo from "../src/logo.svg";
import { GlobalStyles } from "./components/styles/Global";
import React, { useState } from "react";

const theme = {
  colorsLight: {
    headerFooterBackground: "#FAEBD7",
    textMain: "black",
    mainBackground: "#f4eee7",
    text: "black",
    navBackground: "white",
    h1Background: "#f4eee7",
  },
  colorsDark: {
    headerFooterBackground: "#111",
    textMain: "white",
    mainBackground: "#222",
    text: "lightblue",
    navBackground: "#333",
    h1Background: "#222",
  },
};

function App() {
  const [mode, setMode] = useState(true);
  // const [search, setSearch] = useState("");

  function isDarkOrLightMode() {
    if (mode === true) {
      setMode(false);
      console.log("light");
    } else {
      setMode(true);
      console.log("dark");
    }
  }

  return (
    <ThemeProvider theme={mode == true ? theme.colorsDark : theme.colorsLight}>
      <>
        <GlobalStyles />
        <div className="app">
          <Header
            text="Deleting users from list - The Website"
            logosrc={reactLogo}
          />
          <div className="wrapper">
            <Content></Content>
            <Sidebar
              text="This is a simple website, which i was task to make during bootcamp. I hope to add a searchbar and an ability to delete names which you searched :D"
              buttonOnClick={isDarkOrLightMode}
            />
          </div>
          <Footer text="Footer" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
