import { CharacterAttributes } from './character.classes';

const getOpenDoors = (strValue: number) => {
  if (strValue <= 8) return '1-in-6';
  if (strValue <= 12) return '2-in-6';
  if (strValue <= 15) return '3-in-6';
  if (strValue <= 17) return '4-in-6';
  if (strValue <= 18) return '4-in-6';
  return '3-in-6';
};

const getLanguages = (intValue: number) => {
  if (intValue <= 3)
    return { spokenLanguages: 'Native', literacy: 'Illiterate' };
  if (intValue <= 5)
    return { spokenLanguages: 'Native', literacy: 'Illiterate' };
  if (intValue <= 8) return { spokenLanguages: 'Native', literacy: 'Basic' };
  if (intValue <= 12)
    return { spokenLanguages: 'Native', literacy: 'Literate' };
  if (intValue <= 15)
    return { spokenLanguages: 'Native + 1 additional', literacy: 'Literate' };
  if (intValue <= 17)
    return { spokenLanguages: 'Native + 2 additional', literacy: 'Literate' };
  if (intValue <= 18)
    return { spokenLanguages: 'Native + 3 additional', literacy: 'Literate' };
  return { spokenLanguages: 'none', literacy: 'potato' };
};

const getSocial = (chaValue: number) => {
  if (chaValue <= 3)
    return {
      npcReaction: '-2',
      maxRetainers: '1',
      retainerLoyality: '4',
    };
  if (chaValue <= 5)
    return {
      npcReaction: '-1',
      maxRetainers: '2',
      retainerLoyality: '5',
    };
  if (chaValue <= 8)
    return {
      npcReaction: '-1',
      maxRetainers: '3',
      retainerLoyality: '6',
    };
  if (chaValue <= 12)
    return {
      npcReaction: 'No adjustment',
      maxRetainers: '4',
      retainerLoyality: '7',
    };
  if (chaValue <= 15)
    return {
      npcReaction: '+1',
      maxRetainers: '5',
      retainerLoyality: '8',
    };
  if (chaValue <= 17)
    return {
      npcReaction: '+1',
      maxRetainers: '6',
      retainerLoyality: '9',
    };
  if (chaValue <= 18)
    return {
      npcReaction: '+2',
      maxRetainers: '7',
      retainerLoyality: '10',
    };
  return {
    npcReaction: 'none',
    maxRetainers: 'potato',
    retainerLoyality: 'none',
  };
};

export const getExtraAttributes: (attr: number[]) => IExtraAttributes = (
  attr: number[]
) => {
  const languages = getLanguages(attr[+CharacterAttributes.INT]);
  const social = getSocial(attr[+CharacterAttributes.CHA]);
  return {
    spokenLanguages: languages.spokenLanguages,
    literacy: languages.literacy,
    openDoors: getOpenDoors(attr[+CharacterAttributes.STR]),
    npcReaction: social.npcReaction,
    maxRetainers: social.maxRetainers,
    retainerLoyality: social.retainerLoyality,
  };
};

export interface IExtraAttributes {
  spokenLanguages: string;
  literacy: string;
  openDoors: string;
  npcReaction: string;
  maxRetainers: string;
  retainerLoyality: string;
}
