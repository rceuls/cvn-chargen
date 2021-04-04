import { getClass, ICharacterClass } from './character.classes';
import { getRndInteger } from './util';

export interface ICharacter {
  charClass: ICharacterClass;
  attributesArray: number[];
}

const getAttribute = () => {
  const sorted = Array.from(Array(4).keys())
    .map((x) => getRndInteger(1, 6))
    .sort();
  console.log(sorted);
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
    charClass: selectedClass,
    attributesArray: attributes,
  };
  return genChar;
};
