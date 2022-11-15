import { Grid, Typography } from "@mui/material";
import HashLoader from "react-spinners/HashLoader";
import { LanguageObject } from "../../Code2Image";
import { delay, exportAsPicture, generateElevateCSS } from "../../utils/utils";
import Button from "../Button";
import CodeBlock from "../CodeBlock";

export interface OutputArea {
  isLoading: boolean;
  output: string;
  language?: LanguageObject;
  setIsExporting: React.Dispatch<React.SetStateAction<boolean>>;
}

const OutputArea = (props: OutputArea) => {
  const { isLoading, output, language, setIsExporting } = props;
  return (
    <>
      {isLoading ? (
        <Grid container justifyContent={"center"} paddingBottom={5}>
          <HashLoader color="#36d7b7" />
        </Grid>
      ) : (
        output && (
          <>
            <Typography variant="h4" align="center" className="header">
              Output
            </Typography>
            <pre className="select-none" id="exportContainer">
              <code>
                <Grid container justifyContent="center">
                  <Grid container xs={8}>
                    <CodeBlock
                      id="codeblock"
                      value={output}
                      language={language}
                    />
                  </Grid>
                </Grid>
              </code>
            </pre>
            <Grid
              container
              justifyContent={"center"}
              sx={{
                marginY: "60px",
              }}
            >
              <Button
                text="Save as Image"
                onClick={() => {
                  setIsExporting(true);
                  delay(2000).then(() => {
                    exportAsPicture(() => {
                      delay(1000).then(() => {
                        setIsExporting(false);
                      });
                    });
                  });
                }}
                disabled={isLoading}
                sx={{
                  background: "white",
                  boxShadow: "none",
                  ":hover": {
                    ...generateElevateCSS(language?.color),
                    background: "white",
                  },
                  ":focus": {
                    ...generateElevateCSS(language?.color),
                    background: "white",
                  },
                }}
                className={"elevate_custom"}
              />
            </Grid>
          </>
        )
      )}
    </>
  );
};

export default OutputArea;
