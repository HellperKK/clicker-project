import { useState } from "react";
import Game from "./components/game/Game";
import Options from "./components/options/Options";
import AchievementsTab from "./components/achievementsTab/AchievementsTab";
import { ACHIEVEMENTS } from "./gameElements/achievements";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import GameState from "./Gamestate";
import { produce } from "immer";

function Navbar() {
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );

  const gameState: GameState = {
    money,
    buildings,
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [achivements, setAchivements] = useState(ACHIEVEMENTS);
  const [alert, setAlert] = useState(false);

  achivements.forEach((achivement, index) => {
    if (!achivement.isDiscovered && achivement.condition(gameState)) {
      setAchivements(
        produce(achivements, (draft) => {
          draft[index].isDiscovered = true;
        })
      );
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
              Achievements {alert && "NEW!"}
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
        <AchievementsTab achivements={achivements} />
      </div>
    </div>
  );
}

export default Navbar;
