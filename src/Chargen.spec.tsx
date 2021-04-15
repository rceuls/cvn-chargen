import renderer from 'react-test-renderer';
import Chargen from './Chargen';
import { ICharacter } from './services/character.generator';

const genChar: ICharacter = {
  name: 'Tamrin',
  traits: {
    background: 'aaa',
    clothes: 'bbb',
    mannerism: 'ccc',
    personality: 'ddd',
  },
  charClass: {
    bonusXP: (_) => 'my bonus xp',
    name: 'Halfling',
    startingHP: 6,
    savingThrows: [8, 9, 10, 13, 12],
    url: 'Halfling',
    abilities: [
      'Defensive bonus (+2 AC when attacked by larger-than-human opponents)',
      'Hiding (90% in woods, 2-6 otherwise, must remain motionless)',
      'Listen at doors (2-in-6)',
      'Missile attack bonus (+1)',
    ],
    equipment: {
      equipment: [
        'Chain Mail (AC 5)',
        'Polearm (1d10 + STR, two handed, brace, slow)',
        'Backpack',
        'Torches (6)',
        'Tinderbox, flint and steel',
        'Wineskin/Waterskin',
        'Winter Blanket',
        'Rations, Dry, one week',
        'Sack, large',
        'Sacks, small (2)',
        '60 gold pieces',
      ],
      acMod: 4,
    },
    image: 'TCP Human 1.jpg',
  },
  attributeScores: [8, 16, 10, 13, 13, 13],
  maximumHP: 5,
  armorClass: 16,
};

it('renders correctly', () => {
  const tree = renderer.create(<Chargen genChar={genChar} />).toJSON();
  expect(tree).toMatchSnapshot();
});
