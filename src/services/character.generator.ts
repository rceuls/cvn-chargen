import { getClass, ICharacterClass } from "./character.classes";
import { getRndInteger } from "./util";

export interface ICharacter {
    charClass: ICharacterClass,
    attributes: {
        str: number,
        dex: number,
        con: number,
        int: number,
        wis: number,
        cha: number
    }
};

const getAttribute = () => {
    const sorted = Array.from(Array(4).keys()).map(x => getRndInteger(1, 6)).sort();
    console.log(sorted);
    return sorted.slice(1).reduce((prev, curr) => curr + prev)
}

const getAttributes = () =>  Array.from(Array(6).keys()).map(x => getAttribute());

export const generateCharacter = () => {
    let selectedClass = undefined;
    let attributes: number[] = []
    while(!selectedClass) {
        attributes = getAttributes();
        selectedClass = getClass(attributes);
    }

    const genChar: ICharacter = {
        charClass: selectedClass,
        attributes: {
            str: attributes[0],
            dex: attributes[1],
            con: attributes[2],
            int: attributes[3],
            wis: attributes[4],
            cha: attributes[5]
        }
    }
    return genChar;
}