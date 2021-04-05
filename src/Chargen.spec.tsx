import renderer from 'react-test-renderer';
import Chargen from './Chargen';
import { ICharacter } from './services/character.generator';

// regenerate whenever the character modle changes
const charJson =
  '{"name":"Tamrin","charClass":{"name":"Halfling","startingHP":6,"savingThrows":[8,9,10,13,12],"url":"Halfling","abilities":["Defensive bonus (+2 AC when attacked by larger-than-human opponents)","Hiding (90% in woods, 2-6 otherwise, must remain motionless)","Listen at doors (2-in-6)","Missile attack bonus (+1)"],"equipment":{"equipment":["Chain Mail (AC 14)","Polearm (1d10 + STR, two handed, brace, slow)","Backpack","Torches (6)","Tinderbox, flint and steel","Wineskin/Waterskin","Winter Blanket","Rations, Dry, one week","Sack, Large","Sacks, small (2)","60 gold pieces"],"acMod":4},"image":"TCP Human 1.jpg"},"attributeScores":[8,16,10,13,13,13],"maximumHP":5,"armorClass":16}';

it('renders correctly', () => {
  const genChar = (JSON.parse(charJson) as unknown) as ICharacter;
  genChar.charClass.bonusXP = (attr: number[]) => '+10%';
  const tree = renderer.create(<Chargen genChar={genChar} />).toJSON();
  expect(tree).toMatchSnapshot();
});
