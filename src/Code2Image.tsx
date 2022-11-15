import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { createRef, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Menu from "./components/Menu/Menu";
import InputArea from "./components/InputArea/InputArea";
import OutputArea from "./components/OutputArea/OutputArea";
import Footer from "./components/Footer/Footer";

export interface LanguageObject {
  value: string;
  color: string;
}

const Code2Image = () => {
  const [output, setOutput] = useState<string>("");
  const [language, setLanguage] = useState<LanguageObject | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const input = createRef<HTMLTextAreaElement>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const [isExporting, setIsExporting] = useState(false);

  const options: LanguageObject[] = useMemo(
    () => [
      {
        value: "HTML",
        color: "#145DA0",
      },
      {
        value: "CSS",
        color: "#DC4731",
      },
      {
        value: "JS",
        color: "#f9c859",
      },
    ],
    []
  );

  return (
    <>
      <LoadingScreen isExporting={isExporting} language={language} />
      <Header language={language} />
      <Menu options={options} language={language} setLanguage={setLanguage} />
      <InputArea
        input={input}
        language={language}
        setIsLoading={setIsLoading}
        setOutput={setOutput}
        isLoading={isLoading}
      />
      <OutputArea
        isLoading={isLoading}
        output={output}
        language={language}
        setIsExporting={setIsExporting}
      />
      <Footer />
    </>
  );
};

export default Code2Image;
