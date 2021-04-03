import { formatBonus, getModifier } from './util';

it('formatBonus works', () => {
  expect(formatBonus(1)).toBe('+1');
  expect(formatBonus(-1)).toBe('-1');
  expect(formatBonus(0)).toBe('0');
});

it('getModifier works', () => {
  expect(getModifier(1)).toBe(-3);
  expect(getModifier(2)).toBe(-3);
  expect(getModifier(3)).toBe(-3);
  expect(getModifier(4)).toBe(-2);
  expect(getModifier(5)).toBe(-2);
  expect(getModifier(6)).toBe(-1);
  expect(getModifier(7)).toBe(-1);
  expect(getModifier(8)).toBe(-1);
  expect(getModifier(9)).toBe(0);
  expect(getModifier(10)).toBe(0);
  expect(getModifier(11)).toBe(0);
  expect(getModifier(12)).toBe(0);
  expect(getModifier(13)).toBe(1);
  expect(getModifier(14)).toBe(1);
  expect(getModifier(15)).toBe(1);
  expect(getModifier(16)).toBe(2);
  expect(getModifier(17)).toBe(2);
  expect(getModifier(18)).toBe(3);
});
