import { generateCharacter } from './character.generator';
import { names } from './data/names';

it('character generator works', () => {
  const d = generateCharacter();
  expect(names).toContain(d.name);
});
