import AttributesOverview from './AttributesOverview';
import CharacterAbilities from './CharacterAbilities';
import { generateCharacter } from './services/character.generator';
import CombatStats from './CombatStats';
import SavingThrows from './SavingThrows';
import { getRndInteger } from './services/util';
import { names } from './services/names';
import EquipmentOverview from './EquipmentOverview';

const Chargen = () => {
  const genChar = generateCharacter();
  return (
    <>
      <div className="row">
        <div className="col-sm">
          You are {names[getRndInteger(0, names.length - 1)]} the{' '}
          <a
            href={
              'https://oldschoolessentials.necroticgnome.com/srd/index.php' +
              genChar.charClass.url
            }
            target="_blank"
            rel="noreferrer"
          >
            {genChar.charClass.name}
          </a>
        </div>
      </div>
      {genChar.charClass.suffix ? (
        <div className="row">
          <div className="col-sm">{genChar.charClass.suffix}</div>
        </div>
      ) : (
        <></>
      )}
      <hr />
      <AttributesOverview character={genChar} />
      <hr />
      <SavingThrows character={genChar} />
      <hr />
      <CombatStats character={genChar} />
      <hr />
      <CharacterAbilities character={genChar} />
      <hr />
      <EquipmentOverview character={genChar} />
    </>
  );
};

export default Chargen;
