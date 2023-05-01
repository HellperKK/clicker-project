import { useDispatch, useSelector } from "react-redux";
import { resetMoney, setMoney } from "../../store/moneySlice";
import { resetBuildings, setBuildings } from "../../store/buildingSlice";
import { RootState } from "../../store/store";
import { download, openFiles } from "../../utils";

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
