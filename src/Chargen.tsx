import AttributesOverview from './AttributesOverview';
import { generateCharacter } from './services/character.generator';
import CombatStats from './CombatStats';
import SavingThrows from './SavingThrows';
import { getRndValue, getSRDLink } from './services/util';
import { names } from './services/names';
import GenericArrayOverview from './GenericArrayOverview';
import SpellsOverview from './SpellsOverview';

const Chargen = () => {
  const genChar = generateCharacter();
  return (
    <>
      <div className="row">
        <div className="col-sm">
          You are {getRndValue(names)} the{' '}
          <a
            href={getSRDLink(genChar.charClass.url)}
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
      <SavingThrows character={genChar} />
      <CombatStats character={genChar} />
      <GenericArrayOverview data={genChar.charClass.abilities} />
      <SpellsOverview data={genChar.charClass.spells ?? []} />
      <GenericArrayOverview data={genChar.charClass.equipment.equipment} />
      <div className="row">
        <div className="col-sm">
          <img
            className="img-thumbnail"
            style={{ maxWidth: 200, maxHeight: 200, aspectRatio: 'auto' }}
            src={`${process.env.PUBLIC_URL}/portraits/${genChar.charClass.image}`}
            alt="your portrait"
          />
        </div>
      </div>
    </>
  );
};

export default Chargen;
