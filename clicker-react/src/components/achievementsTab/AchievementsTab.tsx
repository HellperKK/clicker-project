import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ACHIEVEMENTS } from "../../gameElements/achievements";
import GameState from "../../Gamestate";
import "./AchievementsTab.css";

function Achievements() {
  const money = useSelector((state: RootState) => state.money.value);
  const buildings = useSelector(
    (state: RootState) => state.buildings.buildings
  );

  const gameState: GameState = {
    money,
    buildings,
  };

  return (
    <div className="columns wrap is-3">
      {ACHIEVEMENTS.filter((achievement) =>
        achievement.condition(gameState)
      ).map((achievement) => (
        <div className="card column is-2" key={achievement.id}>
          <div className="card-content">
            <p className="title is-4">{achievement.name}</p>

            <div className="content">{achievement.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
