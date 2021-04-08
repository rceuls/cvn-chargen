export interface IEquipmentPack {
  equipment: string[];
  acMod: number;
}

export enum CharacterAttributes {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
}

export interface ILinkedItem {
  label: string;
  link: string;
}

export interface ICharacterClass {
  name: string;
  startingHP: number;
  savingThrows: number[];
  url: string;
  abilities: string[];
  suffix?: string;
  equipment: IEquipmentPack;
  image: string;
  bonusXP: (attributes: number[]) => string;
  spells?: ILinkedItem[];
}

export interface ICharacter {
  armorClass: number;
  name: string;
  charClass: ICharacterClass;
  attributeScores: number[];
  maximumHP: number;
  traits: {
    personality: string;
    background: string;
    clothes: string;
    mannerism: string;
  };
}

export interface IExtraAttributes {
  spokenLanguages: string;
  literacy: string;
  openDoors: string;
  npcReaction: string;
  maxRetainers: string;
  retainerLoyality: string;
}
