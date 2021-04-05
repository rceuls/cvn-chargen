import {
  calculateBaseBonusXP,
  cleric,
  dwarf,
  elf,
  fighter,
  getClass,
  halfling,
  magicUser,
  thief,
} from './character.classes';

it('bonusXP calculationworks', () => {
  expect(calculateBaseBonusXP(1)).toBe('-20%');
  expect(calculateBaseBonusXP(2)).toBe('-20%');
  expect(calculateBaseBonusXP(3)).toBe('-20%');
  expect(calculateBaseBonusXP(4)).toBe('-20%');
  expect(calculateBaseBonusXP(5)).toBe('-20%');
  expect(calculateBaseBonusXP(6)).toBe('-10%');
  expect(calculateBaseBonusXP(7)).toBe('-10%');
  expect(calculateBaseBonusXP(8)).toBe('-10%');
  expect(calculateBaseBonusXP(9)).toBe('0%');
  expect(calculateBaseBonusXP(10)).toBe('0%');
  expect(calculateBaseBonusXP(11)).toBe('0%');
  expect(calculateBaseBonusXP(12)).toBe('0%');
  expect(calculateBaseBonusXP(13)).toBe('+5%');
  expect(calculateBaseBonusXP(14)).toBe('+5%');
  expect(calculateBaseBonusXP(15)).toBe('+5%');
  expect(calculateBaseBonusXP(16)).toBe('+10%');
  expect(calculateBaseBonusXP(17)).toBe('+10%');
  expect(calculateBaseBonusXP(18)).toBe('+10%');
});

it('Get str classes', () => {
  expect(getClass([18, 10, 10, 10, 10, 10])).toEqual([fighter, dwarf, elf]);
  expect(getClass([18, 10, 10, 8, 10, 10])).toEqual([fighter, dwarf]);
  expect(getClass([18, 10, 8, 10, 10, 10])).toEqual([fighter, elf]);
});
it('Get dex classes', () => {
  expect(getClass([10, 15, 10, 10, 10, 10])).toEqual([thief, halfling]);
  expect(getClass([10, 15, 8, 10, 10, 10])).toEqual([thief]);
});
it('Get con classes', () => {
  expect(getClass([10, 10, 11, 10, 10, 10])).toEqual([dwarf, halfling]);
  expect(getClass([10, 8, 11, 10, 10, 10])).toEqual([dwarf]);
  expect(getClass([8, 10, 11, 10, 10, 10])).toEqual([halfling]);
});
it('Get int classes', () => {
  expect(getClass([10, 10, 10, 15, 10, 10])).toEqual([magicUser, elf]);
  expect(getClass([8, 10, 10, 15, 10, 10])).toEqual([magicUser]);
});
it('Get wis classes', () => {
  expect(getClass([10, 10, 10, 10, 12, 10])).toEqual([cleric]);
});
