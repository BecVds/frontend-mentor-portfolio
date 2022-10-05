import { SkillLevel, SkillLevelNumber } from './skill-level.enum';
import { Technologies } from './technologies.enum';

export interface ProjectCard {
  name: string;
  description: string;
  technologies: Technologies[];
  skillLevel: SkillLevel;
  skillNumber: SkillLevelNumber;
  image: string;
  route: string;
}
