import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from '../../models/project-card';
import { SkillLevel } from '../../models/skill-level.enum';
import { SkillLevelNumber } from '../../models/skill-level.enum';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.scss'],
})
export class SkillLevelComponent implements OnInit {
  private _originalSkillLevel: SkillLevel;

  skillLevelNumber: string = '0';

  @Input() set skillLevel(level: SkillLevel) {
    this._originalSkillLevel = level;
    this.skillLevelNumberController(level);
  }

  get skillLevel(): SkillLevel {
    return this._originalSkillLevel;
  }

  constructor() {}

  ngOnInit(): void {}

  skillLevelNumberController(skillLevel: string) {
    if (skillLevel === SkillLevel.Advanced) {
      this.skillLevelNumber = SkillLevelNumber.Advanced;
    } else if (skillLevel === SkillLevel.Guru) {
      this.skillLevelNumber = SkillLevelNumber.Guru;
    } else if (skillLevel === SkillLevel.Intermediate) {
      this.skillLevelNumber = SkillLevelNumber.Intermediate;
    } else if (skillLevel === SkillLevel.Junior) {
      this.skillLevelNumber = SkillLevelNumber.Junior;
    } else if (skillLevel === SkillLevel.Newbie) {
      this.skillLevelNumber = SkillLevelNumber.Newbie;
    }
  }
}
