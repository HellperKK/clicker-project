export function download(fileName: string, text: string) {
  //creating an invisible element
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
  );
  element.setAttribute("download", fileName);
  element.click();
}

export function openFiles(
  accept: Array<string> = [],
  multiple = false
): Promise<FileList> {
  return new Promise((resolve, reject) => {
    const fileSelector = document.createElement("input");
    fileSelector.type = "file";
    fileSelector.multiple = multiple;

    if (accept.length > 0) {
      fileSelector.accept = accept.join(",");
    }

    fileSelector.addEventListener("change", () => {
      if (fileSelector.files !== null) {
        resolve(fileSelector.files);
      } else {
        reject(new Error("no file selected"));
      }
    });
    fileSelector.click();
  });
}
