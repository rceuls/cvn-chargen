import AttributesOverview from './AttributesOverview';
import { generateCharacter } from './services/character.generator';
import CombatStats from './CombatStats';
import SavingThrows from './SavingThrows';
import GenericArrayOverview from './GenericArrayOverview';
import SpellsOverview from './SpellsOverview';
import Personalia from './Personalia';
import ExtraPersonalia from './ExtraPersonalia';

const Chargen = () => {
  const genChar = generateCharacter();
  return (
    <>
      <Personalia character={genChar} />
      <AttributesOverview character={genChar} />
      <SavingThrows character={genChar} />
      <CombatStats character={genChar} />
      <GenericArrayOverview data={genChar.charClass.abilities} />
      <SpellsOverview data={genChar.charClass.spells ?? []} />
      <GenericArrayOverview data={genChar.charClass.equipment.equipment} />
      <ExtraPersonalia character={genChar} />
    </>
  );
};

export default Chargen;
