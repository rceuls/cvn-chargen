import { getExtraAttributes } from './character.attributes';

const expectedData = [
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-2',
    maxRetainers: '1',
    retainerLoyality: '4',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-2',
    maxRetainers: '1',
    retainerLoyality: '4',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-2',
    maxRetainers: '1',
    retainerLoyality: '4',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-2',
    maxRetainers: '1',
    retainerLoyality: '4',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-1',
    maxRetainers: '2',
    retainerLoyality: '5',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Illiterate',
    openDoors: '1-in-6',
    npcReaction: '-1',
    maxRetainers: '2',
    retainerLoyality: '5',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Basic',
    openDoors: '1-in-6',
    npcReaction: '-1',
    maxRetainers: '3',
    retainerLoyality: '6',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Basic',
    openDoors: '1-in-6',
    npcReaction: '-1',
    maxRetainers: '3',
    retainerLoyality: '6',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Basic',
    openDoors: '1-in-6',
    npcReaction: '-1',
    maxRetainers: '3',
    retainerLoyality: '6',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Literate',
    openDoors: '2-in-6',
    npcReaction: 'No adjustment',
    maxRetainers: '4',
    retainerLoyality: '7',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Literate',
    openDoors: '2-in-6',
    npcReaction: 'No adjustment',
    maxRetainers: '4',
    retainerLoyality: '7',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Literate',
    openDoors: '2-in-6',
    npcReaction: 'No adjustment',
    maxRetainers: '4',
    retainerLoyality: '7',
  },
  {
    spokenLanguages: 'Native',
    literacy: 'Literate',
    openDoors: '2-in-6',
    npcReaction: 'No adjustment',
    maxRetainers: '4',
    retainerLoyality: '7',
  },
  {
    spokenLanguages: 'Native + 1 additional',
    literacy: 'Literate',
    openDoors: '3-in-6',
    npcReaction: '+1',
    maxRetainers: '5',
    retainerLoyality: '8',
  },
  {
    spokenLanguages: 'Native + 1 additional',
    literacy: 'Literate',
    openDoors: '3-in-6',
    npcReaction: '+1',
    maxRetainers: '5',
    retainerLoyality: '8',
  },
  {
    spokenLanguages: 'Native + 1 additional',
    literacy: 'Literate',
    openDoors: '3-in-6',
    npcReaction: '+1',
    maxRetainers: '5',
    retainerLoyality: '8',
  },
  {
    spokenLanguages: 'Native + 2 additional',
    literacy: 'Literate',
    openDoors: '4-in-6',
    npcReaction: '+1',
    maxRetainers: '6',
    retainerLoyality: '9',
  },
  {
    spokenLanguages: 'Native + 2 additional',
    literacy: 'Literate',
    openDoors: '4-in-6',
    npcReaction: '+1',
    maxRetainers: '6',
    retainerLoyality: '9',
  },
  {
    spokenLanguages: 'Native + 3 additional',
    literacy: 'Literate',
    openDoors: '4-in-6',
    npcReaction: '+2',
    maxRetainers: '7',
    retainerLoyality: '10',
  },
  {
    spokenLanguages: 'none',
    literacy: 'potato',
    openDoors: '3-in-6',
    npcReaction: 'none',
    maxRetainers: 'potato',
    retainerLoyality: 'none',
  },
];

it('extra info calculation works', () => {
  const data: unknown[] = [];
  Array.from(Array(20).keys()).forEach((x) =>
    data.push(getExtraAttributes([x, x, x, x, x, x]))
  );
  expect(data).toStrictEqual(expectedData);
});
