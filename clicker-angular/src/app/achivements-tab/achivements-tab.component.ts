import { Component, Input } from '@angular/core';
import { Achievement } from '../gameElements/achievements';

@Component({
  selector: 'app-achivements-tab',
  templateUrl: './achivements-tab.component.html',
})
export class AchivementsTabComponent {
  @Input() achievements: Array<Achievement>;

  discoveredAchievements() {
    return this.achievements.filter((achievement) => achievement.isDiscovered);
  }
}
