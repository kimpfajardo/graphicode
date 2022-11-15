import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid paddingBottom={5}>
      <Grid container justifyContent={"center"}>
        <p className="mono">Made by: Kim Fajardo</p>
      </Grid>
      <Grid container justifyContent={"center"} gap={5} className="mono">
        <a
          className="link"
          href="https://www.linkedin.com/in/kimpfajardo/"
          target={"_blank"}
        >
          LinkedIn
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/kimpfajardo/"
          target={"_blank"}
        >
          Portfolio
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
