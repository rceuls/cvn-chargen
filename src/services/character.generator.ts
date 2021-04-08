import { getClass } from './character.classes';
import { names } from './data/names';
import { getModifier, getRndInteger, getRndValue } from './util';
import { backgrounds, personalities, clothes, mannerisms } from './data/traits';
import { CharacterAttributes } from './model';

const getAttribute = () => {
  const sorted = Array.from(Array(4).keys())
    .map((x) => getRndInteger(1, 6))
    .sort((a, b) => a - b);
  return sorted.slice(1).reduce((prev, curr) => curr + prev);
};

const getAttributes = () =>
  Array.from(Array(6).keys()).map((x) => getAttribute());

export const generateCharacter = () => {
  let selectedClass = undefined;
  let attributes: number[] = [];
  while (!selectedClass) {
    attributes = getAttributes();
    selectedClass = getRndValue(getClass(attributes));
  }
  const hp =
    getRndInteger(3, selectedClass.startingHP) +
    getModifier(attributes[+CharacterAttributes.CON]);
  return {
    name: getRndValue(names),
    charClass: selectedClass,
    attributeScores: attributes,
    maximumHP: hp > 0 ? hp : 1,
    traits: {
      background: getRndValue(backgrounds),
      personality: getRndValue(personalities),
      clothes: getRndValue(clothes),
      mannerism: getRndValue(mannerisms),
    },
    armorClass:
      10 +
      selectedClass.equipment.acMod +
      getModifier(attributes[+CharacterAttributes.DEX]),
  };
};
