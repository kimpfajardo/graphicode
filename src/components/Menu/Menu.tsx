import { Grid, Typography } from "@mui/material";
import { LanguageObject } from "../../Code2Image";
import { generateElevateCSS } from "../../utils/utils";

export interface MenuProps {
  options: LanguageObject[];
  language?: LanguageObject;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageObject | undefined>>;
}

const Menu = (props: MenuProps) => {
  const { options, language, setLanguage } = props;
  return (
    <Grid paddingTop={5}>
      <Typography variant="h4" align="center" className="header">
        Choose a language
      </Typography>
      <Grid
        container
        gap={5}
        justifyContent={"center"}
        paddingTop={5}
        xs={6}
        margin="auto"
      >
        {options.map(({ value, color }: LanguageObject) => {
          return (
            <Grid
              container
              justifyContent="center"
              className="option elevate_custom"
              xs={12}
              md={3}
              sx={language?.value === value ? generateElevateCSS(color) : {}}
              onClick={() =>
                setLanguage({
                  value,
                  color,
                })
              }
            >
              <p className="caribantu">{value}</p>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Menu;
