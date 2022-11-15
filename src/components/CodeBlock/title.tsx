import { Grid } from "@mui/material";

const CodeTitle = () => {
 return <Grid item>
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      className="code_title"
      gap={1}
    >
      <Grid item className="code_title_btn"></Grid>
      <Grid item className="code_title_btn"></Grid>
      <Grid item className="code_title_btn"></Grid>
    </Grid>
  </Grid>;
};

export default CodeTitle;
