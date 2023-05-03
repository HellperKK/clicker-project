import { Achievement } from "../../gameElements/achievements";
import "./AchievementsTab.css";

interface Props {
  achivements: Array<Achievement>;
}

function Achievements({ achivements }: Props) {
  return (
    <div className="columns wrap is-3">
      {achivements
        .filter((achievement) => achievement.isDiscovered)
        .map((achievement) => (
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
