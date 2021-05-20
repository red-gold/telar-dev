// Copyright (c) 2021 Amirhossein Movahedi (@qolzam)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import { createTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import useThemeContext from "@theme/hooks/useThemeContext";

function MuiLayout(props) {
  const { isDarkTheme } = useThemeContext();
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkTheme ? "dark" : "light",
          primary: {
            main: '#25c2a0'
          },
          secondary: {
            main: '#6c5ce7'
          }
        },
      }),
    [isDarkTheme]
  );
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default MuiLayout;
