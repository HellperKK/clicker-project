import { useState } from "react";
import Game from "./components/game/Game";
import Options from "./components/options/Options";
import Achievements from "./components/achievementsTab/AchievementsTab";
import "./App.css";

function Navbar() {
  const [tabIndex, setTabIndex] = useState(0);

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
            <a onClick={() => setTabIndex(2)}>Achievements</a>
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
        <Achievements />
      </div>
    </div>
  );
}

export default Navbar;
