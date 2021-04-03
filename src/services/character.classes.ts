import { clericPacks, fighterPacks, IEquipmentPack, magicUserPacks, thiefPacks } from "./equipment";
import { gods } from "./gods";
import { getRndInteger } from "./util";

export interface ICharacterClass {
    name: string;
    startingHP: number,
    savingThrows: number[],
    url: string,
    abilities: string[],
    suffix?: string,
    equipment: IEquipmentPack
};

enum CharacterAttributes {
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA
};

const cleric: ICharacterClass = {
    name: "Cleric",
    startingHP: 6,
    savingThrows: [11,12,14,16,15],
    url: "/Cleric",
    abilities: ["Turn Undead"],
    suffix:  `You worship ${gods[getRndInteger(0, gods.length)]}.`,
    equipment: clericPacks[getRndInteger(0, clericPacks.length)]
};

const dwarf: ICharacterClass = {
    name: "Dwarf",
    startingHP: 8,
    savingThrows: [8,9,10,13,12],
    url: "/Dwarf",
    abilities: ["Detect construction tricks (2-in-6)", "Detect room traps (2-in-6)", "Infravision (60')", "Listen at doors (2-in-6)", ],
    equipment: fighterPacks[getRndInteger(0, fighterPacks.length)]

};

const elf: ICharacterClass = {
    name: "Elf",
    startingHP: 6,
    savingThrows: [12,13,13,15,15],
    url: "/Elf",
    abilities: ["Arcane Magic (unarmoured only)", "Detect secret doors (2-in-6)", "Immune to ghoul paralysis", "Infravision (60')", "Listen at doors (2-in-6)"],
    equipment: fighterPacks[getRndInteger(0, fighterPacks.length)]
};

const fighter: ICharacterClass = {
    name: "Fighter",
    startingHP: 8,
    savingThrows: [12,13,14,15,16],
    url: "/Fighter",
    abilities: [],
    equipment: fighterPacks[getRndInteger(0, fighterPacks.length)]
};

const halfling: ICharacterClass = {
    name: "Halfling",
    startingHP: 6,
    savingThrows: [8,9,10,13,12],
    url: "/Halfling",
    abilities: ["Defensive bonus (+2 AC when attacked by larger-than-human opponents)", "Hiding (90% in woods, 2-6 otherwise, must remain motionless)", "Listen at doors (2-in-6)", "Missile attack bonus (+1)"],
    equipment: fighterPacks[getRndInteger(0, fighterPacks.length)]
};

const magicUser: ICharacterClass = {
    name: "Magic-User",
    startingHP: 4,
    savingThrows: [13,14,13,16,15],
    url: "/Magic-User",
    abilities: ["Arcane Magic"],
    equipment: magicUserPacks[getRndInteger(0, magicUserPacks.length)]
};

const thief: ICharacterClass = {
    name: "Thief",
    startingHP: 4,
    savingThrows: [13,14,13,16,15],
    url: "/Thief", 
    abilities: ["Thief skills", "Backstab (+4 to hit and double damage when attacking an unaware opponent from behind)"],
    equipment: thiefPacks[getRndInteger(0, thiefPacks.length)]
};

export const getClass = (attributes: number[]) => {
    const max = Math.max(...attributes);
    let avClasses: ICharacterClass[] = [fighter];
    if(max === attributes[+CharacterAttributes.STR]) {
        if(attributes[+CharacterAttributes.CON] > 9) {
            avClasses = [...avClasses, dwarf];
        }
        if(attributes[+CharacterAttributes.INT] > 9) {
            avClasses = [...avClasses, elf];
        }
    }
    if(max === attributes[+CharacterAttributes.DEX]) {
        avClasses = [...avClasses, thief];
        if(attributes[+CharacterAttributes.CON] > 9) {
            avClasses = [...avClasses, halfling];
        }
    }
    if(max === attributes[+CharacterAttributes.CON]) {
        if(attributes[+CharacterAttributes.STR] > 9) {
            avClasses = [...avClasses, dwarf];
        }
        if(attributes[+CharacterAttributes.DEX] > 9) {
            avClasses = [...avClasses, halfling];
        }
    }
    if(max === attributes[+CharacterAttributes.INT]) {
        avClasses = [magicUser];
        if(attributes[+CharacterAttributes.STR] > 9) {
            avClasses = [...avClasses, elf];
        }
    }
    if(max === attributes[+CharacterAttributes.WIS]) {
        avClasses = [cleric];
    }
    return avClasses[getRndInteger(0, avClasses.length)];
};