import { useDispatch, useSelector } from "react-redux";

import { resetMoney, setMoney } from "../../store/moneySlice";
import { resetBuildings, setBuildings } from "../../store/buildingSlice";
import { RootState } from "../../store/store";
import { download } from "../../utils/download";
import { openFiles } from "../../utils/openfiles";
import GameState from "../../utils/Gamestate";
import {
  resetAchievements,
  setAchievements,
} from "../../store/achivementSlice";

function Options() {
  const dispatch = useDispatch();
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );
  const achievements = useSelector(
    (state: RootState) => state.achievements.achievements
  );

  return (
    <>
      <button
        className="button"
        onClick={() => {
          dispatch(resetMoney());
          dispatch(resetBuildings());
          dispatch(resetAchievements());
        }}
      >
        Reset
      </button>
      <button
        className="button"
        onClick={() => {
          const state: GameState = {
            buildings,
            money,
            achievements,
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
            const state: GameState = JSON.parse(save);
            dispatch(setMoney(state.money));
            dispatch(setBuildings(state.buildings));
            dispatch(setAchievements(state.achievements));
          }
        }}
      >
        Load
      </button>
      <button
        className="button"
        onClick={() => {
          const state: GameState = {
            buildings,
            money,
            achievements,
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
            const state: GameState = JSON.parse(content);
            dispatch(setMoney(state.money));
            dispatch(setBuildings(state.buildings));
            dispatch(setAchievements(state.achievements));
          }
        }}
      >
        Import
      </button>
    </>
  );
}

export default Options;
