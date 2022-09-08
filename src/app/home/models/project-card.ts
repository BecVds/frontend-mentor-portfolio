import { SkillLevel } from './skill-level.enum';
import { Technologies } from './technologies.enum';

export interface ProjectCard {
  name: string;
  description: string;
  technologies: Technologies[];
  skillLevel: SkillLevel;
  image: string;
}
