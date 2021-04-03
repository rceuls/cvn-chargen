import { ICharacter } from './services/character.generator';
import { getModifier, getRndInteger } from './services/util';

const CombatStats = ({ character }: { character: ICharacter }) => {
  const hp =
    getRndInteger(3, character.charClass.startingHP) +
    getModifier(character.attributes.con);

  return (
    <>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Base Attack Bonus</span>
          <span className="ml-2">+0</span>
          <span className="ml-2 font-weight-bold">Armor Class</span>
          <span className="ml-2">10</span>
          <span className="ml-2 font-weight-bold">Hit Points</span>
          <span className="ml-2">{hp > 0 ? hp : 1}</span>
        </div>
      </div>
    </>
  );
};

export default CombatStats;
