import { spells } from './spells';
import { getRndInteger } from './util';

export interface IEquipmentPack {
  equipment: string[];
  acMod: number;
}

const basePack = [
  'Backpack',
  'Torches (6)',
  'Tinderbox, flint and steel',
  'Wineskin/Waterskin',
  'Winter Blanket',
  'Rations, Dry, one week',
  'Sack, Large',
  'Sacks, small (2)',
  `${getRndInteger(1, 6) * 10} gold pieces`,
];

export const fighterPacks: IEquipmentPack[] = [
  {
    equipment: [
      'Chain Mail (AC 14)',
      'Shield (AC +1)',
      'Longsword (1d8 + STR)',
      ...basePack,
    ],
    acMod: +5,
  },
  {
    equipment: [
      'Chain Mail (AC 14)',
      'Polearm (1d10 + STR, two handed, brace, slow)',
      ...basePack,
    ],
    acMod: +4,
  },
  {
    equipment: [
      'Leather Armor (AC 12)',
      'Longsword (1d8 + STR)',
      "Shortbow (1d6, 50' (+1 to hit)/100'/150' (-1 to hit))",
      'Quiver with 30 arrows',
      ...basePack,
    ],
    acMod: +2,
  },
];

export const elfPacks: IEquipmentPack[] = [
  {
    equipment: [`Spellbook`, ...fighterPacks[0].equipment],
    acMod: +5,
  },
  {
    equipment: ['Spellbook', ...fighterPacks[1].equipment],
    acMod: +4,
  },
  {
    equipment: ['Spellbook', ...fighterPacks[2].equipment],
    acMod: +2,
  },
];

export const magicUserPacks: IEquipmentPack[] = [
  {
    equipment: [
      `Spellbook`,
      `Scroll of ${spells[getRndInteger(0, spells.length - 1)].label}`,
      "2 Daggers (1d4 + STR, 10' (+1 to hit)/20'/30' (-1 to hit))",
      'Walking Staff  (1d4 + STR), slow, two handed) ',
      ...basePack,
    ],
    acMod: +0,
  },
  {
    equipment: [
      'Spellbook',
      '50 GP',
      "2 Daggers (1d4 + STR, 10'(+1 to hit)/20'/30' (-1 to hit))",
      'Walking Staff (1d4 + STR, slow, two handed)',
      ...basePack,
    ],
    acMod: +0,
  },
];

export const clericPacks: IEquipmentPack[] = [
  {
    equipment: [
      'Leather armor (AC 12)',
      'Shield (AC +1)',
      'Holy Symbol',
      'Vial of holy water',
      'Mace (1d6 + STR)',
      ...basePack,
    ],
    acMod: +3,
  },
  {
    equipment: [
      'Leather armor (AC 12)',
      "Sling (1d4, 40'(+1 to hit)/80'/160' (-1 to hit))",
      '30 sling bullets in pouch',
      'Holy Symbol',
      'Vial of holy water',
      'Mace (1d6 + STR)',
      ...basePack,
    ],
    acMod: +2,
  },
];

export const thiefPacks: IEquipmentPack[] = [
  {
    equipment: [
      'Leather armor (AC 12)',
      "Thieves' tools",
      'Shortsword (1d6 + STR)',
      "2 Daggers (1d4 + STR, 10'(+1 to hit)/20'/30' (-1 to hit))",
      "Silken Rope, 50'",
      ...basePack,
    ],
    acMod: +2,
  },
];
