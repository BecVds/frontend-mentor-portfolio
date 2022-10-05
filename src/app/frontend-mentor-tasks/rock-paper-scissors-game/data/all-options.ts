import { OptionButton } from '../models/option-button';

export const ALL_OPTIONS: OptionButton[] = [
  {
    id: 1,
    name: 'Paper',
    cssClass: 'paper',
    image: '../../../../assets/rock-paper-scissors-assets/icon-paper.svg',
    loseAgainst: [3, 5],
    winAgainst: [2, 4],
  },
  {
    id: 2,
    name: 'Rock',
    cssClass: 'rock',
    image: '../../../../assets/rock-paper-scissors-assets/icon-rock.svg',
    loseAgainst: [1, 4],
    winAgainst: [3, 5],
  },
  {
    id: 3,
    name: 'Scissors',
    cssClass: 'scissors',
    image: '../../../../assets/rock-paper-scissors-assets/icon-scissors.svg',
    loseAgainst: [2, 4],
    winAgainst: [1, 5],
  },
  {
    id: 4,
    name: 'Spock',
    cssClass: 'spock',
    image: '../../../../assets/rock-paper-scissors-assets/icon-spock.svg',
    loseAgainst: [5, 1],
    winAgainst: [3, 2],
  },
  {
    id: 5,
    name: 'Lizard',
    cssClass: 'lizard',
    image: '../../../../assets/rock-paper-scissors-assets/icon-lizard.svg',
    loseAgainst: [2, 3],
    winAgainst: [1, 4],
  },
];
