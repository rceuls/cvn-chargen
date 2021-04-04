import { calculateBaseBonusXP } from './character.classes';

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
