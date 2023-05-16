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
