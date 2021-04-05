import { calculateBaseBonusXP } from './character.classes';
import { generateCharacter } from './character.generator';
import { names } from './names';

it('character generator works', () => {
  const d = generateCharacter();
  expect(names).toContain(d.name);
});
