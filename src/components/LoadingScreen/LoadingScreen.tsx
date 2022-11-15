import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { LanguageObject } from "../../Code2Image";

export interface LoadingScreenProps {
    isExporting: boolean
    language?: LanguageObject
}

const LoadingScreen = (props: any) => {
  const { isExporting, language } = props;
  const theme = useTheme();
  // @ts-expect-error
  const isBelowLarge: boolean = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div
      className={`splashscreen ${isExporting && "modal"}`}
      style={{
        background: language?.color || "none",
      }}
    >
      <Typography
        variant={isBelowLarge ? "h3" : "h1"}
        align="center"
        className="header"
      >
        <Grid container gap={2}>
          <p className="gray">{"< "}</p>
          <p>GRAFICODE</p>
          <p className="gray">{" />"}</p>
        </Grid>
      </Typography>
      <Typography
        variant={isBelowLarge ? "body1" : "h6"}
        align="center"
        className="header"
      >
        Converting your code
      </Typography>
    </div>
  );
};

export default LoadingScreen;
