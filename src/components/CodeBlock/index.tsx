import { Grid } from "@mui/material";
import { useStyles } from "./styles/codeblock.styles";
import CodeTitle from "./title";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import { LanguageObject } from "../../Code2Image";

export interface CodeBlockProps {
  value: string;
  id: string;
  language?: LanguageObject;
}
const CodeBlock = (props: CodeBlockProps) => {
  const { value, id, language } = props;
  const classes = useStyles();

  useEffect(() => {
    if (Prism) Prism.highlightAll();
  }, [value]);

  return (
    <Grid className="outputArea">
      <Grid container className="code">
        <CodeTitle />
        <Grid container className={classes.code} id={id}>
          <pre>
            <code className={`language-${language?.value}`}>{value}</code>
          </pre>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CodeBlock;
