import { CharacterAttributes } from './services/character.classes';
import { formatBonus, getModifier } from './services/util';

const attributeOrder: CharacterAttributes[] = [
  CharacterAttributes.STR,
  CharacterAttributes.DEX,
  CharacterAttributes.CON,
  CharacterAttributes.INT,
  CharacterAttributes.WIS,
  CharacterAttributes.CHA,
];

const AttributesOverview = ({
  attributes,
  calculateBonusXP,
}: {
  attributes: number[];
  calculateBonusXP: (input: number[]) => string;
}) => {
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
                  {attributes[+a]} ({formatBonus(getModifier(attributes[+a]))})
                </span>
              </>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Bonus XP</span>
          <span className="ml-2">{calculateBonusXP(attributes)}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AttributesOverview;
