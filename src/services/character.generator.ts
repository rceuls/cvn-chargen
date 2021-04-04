import { getClass, ICharacterClass } from './character.classes';
import { names } from './names';
import { getRndInteger, getRndValue } from './util';

export interface ICharacter {
  name: string;
  charClass: ICharacterClass;
  attributeScores: number[];
}

const getAttribute = () => {
  const sorted = Array.from(Array(4).keys())
    .map((x) => getRndInteger(1, 6))
    .sort();
  return sorted.slice(1).reduce((prev, curr) => curr + prev);
};

const getAttributes = () =>
  Array.from(Array(6).keys()).map((x) => getAttribute());

export const generateCharacter = () => {
  let selectedClass = undefined;
  let attributes: number[] = [];
  while (!selectedClass) {
    attributes = getAttributes();
    selectedClass = getClass(attributes);
  }

  const genChar: ICharacter = {
    name: getRndValue(names),
    charClass: selectedClass,
    attributeScores: attributes,
  };
  return genChar;
};
