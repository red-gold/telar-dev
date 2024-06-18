// Copyright (c) 2021 Amirhossein Movahedi (@qolzam)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useColorMode } from "@docusaurus/theme-common";

function MuiLayout(props) {
  const { isDarkTheme } = useColorMode();

  useEffect(() => {
    const updateTheme = () => {
      setTimeout(() => {
        if (isDarkTheme) {
          console.log("dark mode");
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }, 200);
    };

    updateTheme();

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [isDarkTheme]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkTheme ? "dark" : "light",
          primary: {
            main: "#25c2a0",
          },
          secondary: {
            main: "#6c5ce7",
          },
        },
      }),
    [isDarkTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default MuiLayout;
