import { CharacterAttributes } from './services/character.classes';
import { ICharacter } from './services/character.generator';
import { formatBonus, getModifier } from './services/util';

const attributeOrder: CharacterAttributes[] = [
  CharacterAttributes.STR,
  CharacterAttributes.DEX,
  CharacterAttributes.CON,
  CharacterAttributes.INT,
  CharacterAttributes.WIS,
  CharacterAttributes.CHA,
];

const AttributesOverview = ({ character }: { character: ICharacter }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          {attributeOrder.map((a: CharacterAttributes) => {
            return (
              <>
                <span className="font-weight-bold">
                  {CharacterAttributes[a]}
                </span>
                <span className="ml-2 mr-2">
                  {character.attributesArray[+a]} (
                  {formatBonus(getModifier(character.attributesArray[+a]))})
                </span>
              </>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Bonus XP</span>
          <span className="ml-2">
            {character.charClass.bonusXP(character.attributesArray)}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AttributesOverview;
