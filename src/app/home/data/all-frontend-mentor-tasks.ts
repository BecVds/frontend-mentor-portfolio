import {
  CALCULATOR_APP,
  FRONTEND_MENTOR,
  LAUNCH_COUNTDOWN_TIMER,
  ROCK_PAPER_SCISSORS_GAME,
  SOCIAL_MEDIA_DASHBOARD,
} from '../config/routes-config';
import { ProjectCard } from '../models/project-card';
import { SkillLevel, SkillLevelNumber } from '../models/skill-level.enum';
import { Technologies } from '../models/technologies.enum';

export const ALL_FRONTEND_MENTOR_TASKS: ProjectCard[] = [
  {
    name: 'Calculator App',
    description: `This calculator app was a great test of my CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!`,
    image: '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
    skillLevel: SkillLevel.Intermediate,
    skillNumber: SkillLevelNumber.Intermediate,
    technologies: [Technologies.HTML, Technologies.CSS, Technologies.JS],
    route: `${FRONTEND_MENTOR}/${CALCULATOR_APP}`,
  },
  {
    name: 'Social Media Dasboard',
    description: `This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.`,
    image: '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
    skillLevel: SkillLevel.Junior,
    skillNumber: SkillLevelNumber.Junior,
    technologies: [Technologies.HTML, Technologies.CSS, Technologies.JS],
    route: `${FRONTEND_MENTOR}/${SOCIAL_MEDIA_DASHBOARD}`,
  },
  {
    name: 'Launch Countdown Timer',
    description: `This will be a fun one! Your challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!`,
    image: '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
    skillLevel: SkillLevel.Intermediate,
    skillNumber: SkillLevelNumber.Intermediate,
    technologies: [Technologies.HTML, Technologies.CSS, Technologies.JS],
    route: `${FRONTEND_MENTOR}/${LAUNCH_COUNTDOWN_TIMER}`,
  },
  {
    name: 'Rock, Paper, Scissors Game',
    description: `This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.`,
    image: '../../../assets/project-card-images/projectCard-CalculatorApp.jpg',
    skillLevel: SkillLevel.Advanced,
    skillNumber: SkillLevelNumber.Advanced,
    technologies: [Technologies.HTML, Technologies.CSS, Technologies.JS],
    route: `${FRONTEND_MENTOR}/${ROCK_PAPER_SCISSORS_GAME}`,
  },
];
