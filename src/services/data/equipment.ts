import { spells } from './spells';
import { getRndInteger } from '../util';
import { IEquipmentPack } from '../model';

const basePack = [
  'Backpack',
  'Torches (6)',
  'Tinderbox, flint and steel',
  'Wineskin/Waterskin',
  'Winter Blanket',
  'Rations, Dry, one week',
  'Sack, large',
  'Sacks, small (2)',
  `${getRndInteger(1, 3) * 10} gold pieces`,
];

export const fighterPacks: IEquipmentPack[] = [
  {
    equipment: [
      'Chain Mail and Shield (AC 4)',
      'Shield',
      'Longsword (1d8 + STR)',
      ...basePack,
    ],
    acMod: -6,
  },
  {
    equipment: [
      'Chain Mail (AC 5)',
      'Polearm (1d10 + STR, two handed, brace, slow)',
      ...basePack,
    ],
    acMod: -5,
  },
  {
    equipment: [
      'Leather Armor (AC 7)',
      'Longsword (1d8 + STR)',
      "Shortbow (1d6, 50' (+1 to hit)/100'/150' (-1 to hit))",
      'Quiver with 30 arrows',
      ...basePack,
    ],
    acMod: -3,
  },
];

export const elfPacks: IEquipmentPack[] = [
  {
    equipment: [`Spellbook`, ...fighterPacks[0].equipment],
    acMod: -6,
  },
  {
    equipment: ['Spellbook', ...fighterPacks[1].equipment],
    acMod: -5,
  },
  {
    equipment: ['Spellbook', ...fighterPacks[2].equipment],
    acMod: -3,
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
      'Leather armor (AC 7)',
      'Shield (AC +1)',
      'Holy Symbol',
      'Vial of holy water',
      'Mace (1d6 + STR)',
      ...basePack,
    ],
    acMod: -4,
  },
  {
    equipment: [
      'Leather armor (AC 7)',
      "Sling (1d4, 40'(+1 to hit)/80'/160' (-1 to hit))",
      '30 sling bullets in pouch',
      'Holy Symbol',
      'Vial of holy water',
      'Mace (1d6 + STR)',
      ...basePack,
    ],
    acMod: -3,
  },
];

export const thiefPacks: IEquipmentPack[] = [
  {
    equipment: [
      'Leather armor (AC 7)',
      "Thieves' tools",
      'Shortsword (1d6 + STR)',
      "2 Daggers (1d4 + STR, 10'(+1 to hit)/20'/30' (-1 to hit))",
      "Silken Rope, 50'",
      ...basePack,
    ],
    acMod: -3,
  },
];
