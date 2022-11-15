import { Grid, TextareaAutosize } from "@mui/material";
import { LanguageObject } from "../../Code2Image";
import {
  check_tab,
  delay,
  generateElevateCSS,
  update,
} from "../../utils/utils";
import Button from "../Button";

export interface InputAreaProps {
  input: React.RefObject<HTMLTextAreaElement>;
  language?: LanguageObject;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOutput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const InputArea = (props: any) => {
  const { input, language, setIsLoading, setOutput, isLoading } = props;
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{
        marginY: "60px",
      }}
    >
      <Grid container justifyContent={"center"} xs={8}>
        <TextareaAutosize
          className="inputArea elevate mono"
          placeholder="Place your code here"
          ref={input}
          onInput={() => {
            if (input.current) {
              update(input.current.value, input);
            }
          }}
          onKeyDown={(e) => {
            check_tab(input.current, e, input);
          }}
          spellCheck={false}
        />
      </Grid>
      {language ? (
        <Grid
          item
          sx={{
            marginTop: "60px",
          }}
        >
          <Button
            text="Convert"
            onClick={() => {
              if (input?.current?.value) {
                setIsLoading(true);
                const x = input?.current?.value;
                delay(1000).then(() => {
                  setOutput(x ?? "");
                  setIsLoading(false);
                });
              }
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
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default InputArea;
