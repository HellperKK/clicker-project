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
