import { spells } from "./spells";
import { getRndInteger } from "./util";

export interface IEquipmentPack {
    equipment: string[],
    acMod: number
}

const basePack = [ "Backpack", 
    "Torches (6)", 
    "Tinderbox, flint and steel", 
    "Wineskin/Waterskin", 
    "Winter Blanket", 
    "Rations, Dry, one week", 
    "Sack, Large", 
    "Sacks, small (2)",
    `${getRndInteger(1, 6) * 10} gold pieces` ];

export const fighterPacks: IEquipmentPack[] = [
    { equipment: ["Chain Mail", "Shield", "Longsword", ...basePack],acMod : +5 },
    { equipment: ["Chain Mail", "Polearm", ...basePack],acMod : +4 },
    { equipment: ["Leather Armor", "Longsword", "Shortbow", "Quiver with 30 arrows", ...basePack], acMod : +2 },
];

export const elfPacks: IEquipmentPack[] = [
    { equipment: [`Spellbook with read magic, ${spells[getRndInteger(0, spells.length - 1)]}`, ...fighterPacks[0].equipment], acMod: +5},
    { equipment: [`Spellbook with read magic, ${spells[getRndInteger(0, spells.length - 1)]}`, ...fighterPacks[1].equipment], acMod: +4},
    { equipment: [`Spellbook with read magic, ${spells[getRndInteger(0, spells.length - 1)]}`, ...fighterPacks[2].equipment], acMod: +2},
]

export const magicUserPacks: IEquipmentPack[] = [
    {equipment: [`Spellbook with read magic, ${spells[getRndInteger(0, spells.length - 1)]}`, `Scroll of ${spells[getRndInteger(0, spells.length - 1)]}`, "2 Daggers", "Walking Staff", ...basePack], acMod: +0},
    {equipment: [`Spellbook with read magic, ${spells[getRndInteger(0, spells.length - 1)]}`, "50 GP", "2 Daggers", "Walking Staff", ...basePack], acMod: +0},
];


export const clericPacks: IEquipmentPack[] = [
    {equipment: ["Leather armor", "Shield", "Holy Symbol", "Vial of holy water",  "Mace", ...basePack], acMod: +2},
    {equipment: ["Leather armor", "Sling", "30 sling bullets in pouch", "Holy Symbol", "Vial of holy water",  "Mace", ...basePack], acMod: +2},
]


export const thiefPacks: IEquipmentPack[] = [
    {equipment: ["Leather armor", "Thieves' tools", "Shortsword", "2 Daggers", "Silken Rope, 50'", ...basePack], acMod: +2},
]
