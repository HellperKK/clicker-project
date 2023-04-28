import { useDispatch, useSelector } from "react-redux";
import { resetMoney, setMoney } from "./moneySlice";
import { resetBuildings, setBuildings } from "./buildingSlice";
import { RootState } from "./store";

function download(fileName: string, text: string) {
  //creating an invisible element
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
  );
  element.setAttribute("download", fileName);
  element.click();
}

const openFiles = (
  accept: Array<string> = [],
  multiple = false
): Promise<FileList> => {
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
};

function Options() {
  const dispatch = useDispatch();
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );

  return (
    <>
      <button
        className="button"
        onClick={() => {
          dispatch(resetMoney());
          dispatch(resetBuildings());
        }}
      >
        Reset
      </button>
      <button
        className="button"
        onClick={() => {
          const state = {
            buildings,
            money,
          };
          localStorage.setItem("save", JSON.stringify(state));
        }}
      >
        Save
      </button>
      <button
        className="button"
        onClick={() => {
          const save = localStorage.getItem("save");
          if (save !== null) {
            const state = JSON.parse(save);
            dispatch(setMoney(state.money));
            dispatch(setBuildings(state.buildings));
          }
        }}
      >
        Load
      </button>
      <button
        className="button"
        onClick={() => {
          const state = {
            buildings,
            money,
          };
          download("save.json", JSON.stringify(state));
        }}
      >
        Export
      </button>
      <button
        className="button"
        onClick={async () => {
          const files = await openFiles();
          const file = files[0];

          if (file) {
            const content = await file.text();
            const state = JSON.parse(content);
            dispatch(setMoney(state.money));
            dispatch(setBuildings(state.buildings));
          }
        }}
      >
        Import
      </button>
    </>
  );
}

export default Options;
