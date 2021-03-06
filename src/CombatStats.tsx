import { CharacterAttributes } from './services/model';
import { formatBonus, getModifier } from './services/util';

const CombatStats = ({
  character,
}: {
  character: {
    attributeScores: number[];
    armorClass: number;
    maximumHP: number;
  };
}) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">THAC0 (melee, ranged)</span>
          <span className="ml-2">
            19 (
            {formatBonus(
              getModifier(character.attributeScores[+CharacterAttributes.STR])
            )}
            ,
            {formatBonus(
              getModifier(character.attributeScores[+CharacterAttributes.DEX])
            )}
            )
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Armor Class</span>
          <span className="ml-2">{character.armorClass}</span>
          <span className="ml-2 font-weight-bold">Maximum Hit Points</span>
          <span className="ml-2">{character.maximumHP}</span>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CombatStats;
