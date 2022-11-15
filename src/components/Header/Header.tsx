import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { LanguageObject } from "../../Code2Image";
import { generateBackgroundColor } from "../../utils/utils";

export interface Header {
    language?: LanguageObject
}

const Header = (props: Header) => {
  const { language } = props;
  const theme = useTheme();
  // @ts-expect-error
  const isBelowLarge: boolean = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      justifyContent={isBelowLarge ? "center" : "space-between"}
      alignItems={"center"}
      className="banner"
      flexDirection={isBelowLarge ? "column" : "row"}
      sx={generateBackgroundColor(language?.color)}
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
        TURN YOUR WRITTEN CODE INTO IMAGES
      </Typography>
    </Grid>
  );
};

export default Header