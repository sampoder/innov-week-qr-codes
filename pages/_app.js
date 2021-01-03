import React from "react";
import customTheme from "../styles/customTheme";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/react";
import Header from "next/head";
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <title>Innovation Week 2021</title>
      </Header>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
