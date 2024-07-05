import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReadOnlyProps } from "../../types/helper";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#46464F",
      light: "#F1EFFF"
    },
    primary : {
      main: "#F1EFFF",
      light : "#2E3EFF",
    }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    subtitle1: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  },
});

interface MuiCustomizedThemeProps {
  children: React.ReactNode;
}

const MuiCustomizedTheme: React.FC<ReadOnlyProps<MuiCustomizedThemeProps>> = ({
  children,
}) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default MuiCustomizedTheme;
