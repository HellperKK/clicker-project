import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ACHIEVEMENTS } from "../../gameElements/achievements";
// import "AchievementsTab.css";
import GameState from "../../Gamestate";

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
    <div>
      {ACHIEVEMENTS.filter((achievement) =>
        achievement.condition(gameState)
      ).map((achievement) => (
        <div className="card" key={achievement.id}>
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