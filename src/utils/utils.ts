import html2canvas from "html2canvas";

export const generateBoxShadow = (hex: string = "blue") => {
  return `1px 1px 0px ${hex}, 2px 2px 0px ${hex}, 3px 3px 0px ${hex},
    4px 4px 0px ${hex}, 5px 5px 0px ${hex}, 6px 6px 0px ${hex}, 7px 7px 0px ${hex},
    8px 8px 0px ${hex}, 9px 9px 0px ${hex}`;
};

export const generateElevateCSS = (hex: string = "blue") => {
  return {
    boxShadow: generateBoxShadow(hex),
    outline: "none",
    transform: "translate(-10px, -20px)",
  };
};

export const generateBackgroundColor = (hex: string = "#f9c859") => {
  return {
    backgroundColor: hex,
  };
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const update = (text: string, inputRef: any) => {
  let val = text;
  if (val[text.length - 1] == "\n") {
    val += "";
  }
  if (inputRef.current) {
    inputRef.current.value = val;
  }
};

export const check_tab = (
  element: any,
  e: React.KeyboardEvent<HTMLTextAreaElement>,
  inputRef: any
) => {
  let code = element.value as string;
  if (e.key == "Tab") {
    e.preventDefault();
    let before_tab = code.slice(0, element.selectionStart);
    let after_tab = code.slice(element.selectionEnd, element.value.length);
    let cursor_pos = element.selectionStart + 1;
    element.value = before_tab + "\t" + after_tab;
    element.selectionStart = cursor_pos;
    element.selectionEnd = cursor_pos;
    update(element.value, inputRef);
  }
};

export const exportAsPicture = (onEndCallback: () => void) => {
  var html = document.getElementsByTagName("HTML")[0];
  var body = document.getElementsByTagName("BODY")[0];
  var htmlWidth = html.clientWidth;
  var bodyWidth = body.clientWidth;

  var data = document.getElementById("exportContainer");
  if (data) {
    var newWidth = data.scrollWidth - data.clientWidth;

    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }
    // @ts-ignore
    html.style.width = 1200 + "px";
    // @ts-ignore
    body.style.width = 1200 + "px";
    html2canvas(data, { backgroundColor: null })
      .then((canvas: HTMLCanvasElement) => {
        var image = canvas.toDataURL("image/png", 1);
        return image;
      })
      .then((image: any) => {
        saveAs(image, "code.png", onEndCallback);
        // @ts-ignore
        html.style.width = null;
        // @ts-ignore
        body.style.width = null;
      });
  }
};

export const saveAs = (
  blob: any,
  fileName: string,
  onEndCallback: () => void
) => {
  var elem = window.document.createElement("a");
  elem.href = blob;
  elem.download = fileName;
  // @ts-ignore
  elem.style = "display:none;";
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === "function") {
    elem.click();
  } else {
    elem.target = "_blank";
    elem.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
  onEndCallback();
};
