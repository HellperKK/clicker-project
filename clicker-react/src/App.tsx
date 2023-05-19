import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import AchievementsTab from "./components/achievementsTab/AchievementsTab";
import GameState from "./utils/Gamestate";
import Game from "./components/game/Game";
import Options from "./components/options/Options";
import { RootState } from "./store/store";

import "./App.css";
import { achivementUnlockable } from "./gameElements/achivementsUtils";
import { unlockAchievement } from "./store/achivementSlice";

function Navbar() {
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );
  const achievements = useSelector(
    (state: RootState) => state.achievements.achievements
  );
  const dispatch = useDispatch();

  const gameState: GameState = {
    money,
    buildings,
    achievements,
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [alert, setAlert] = useState(false);

  achievements.forEach((achievement) => {
    if (
      !achievement.isDiscovered &&
      achivementUnlockable(gameState, achievement)
    ) {
      dispatch(unlockAchievement(achievement));
      setAlert(true);
    }
  });

  return (
    <div>
      <div className="tabs">
        <ul>
          <li className={tabIndex === 0 ? "is-active" : ""}>
            <a onClick={() => setTabIndex(0)}>Game</a>
          </li>
          <li className={tabIndex === 1 ? "is-active" : ""}>
            <a onClick={() => setTabIndex(1)}>Options</a>
          </li>
          <li className={tabIndex === 2 ? "is-active" : ""}>
            <a
              onClick={() => {
                setTabIndex(2);
                setAlert(false);
              }}
            >
              Achievements{" "}
              {alert && <span className="has-text-info">NEW!</span>}
            </a>
          </li>
        </ul>
      </div>

      <div className={tabIndex !== 0 ? "hidden" : ""}>
        <Game />
      </div>
      <div className={tabIndex !== 1 ? "hidden" : ""}>
        <Options />
      </div>
      <div className={tabIndex !== 2 ? "hidden" : ""}>
        <AchievementsTab achivements={achievements} />
      </div>
    </div>
  );
}

export default Navbar;
