import AttributesOverview from './AttributesOverview';
import { ICharacter } from './services/character.generator';
import CombatStats from './CombatStats';
import SavingThrows from './SavingThrows';
import GenericArrayOverview from './GenericArrayOverview';
import SpellsOverview from './SpellsOverview';
import Personalia from './Personalia';
import ExtraPersonalia from './ExtraPersonalia';

const Chargen = ({ genChar }: { genChar: ICharacter }) => {
  return (
    <>
      <Personalia character={genChar} />
      <AttributesOverview
        attributes={genChar.attributeScores}
        calculateBonusXP={genChar.charClass.bonusXP}
      />
      <SavingThrows savingThrows={genChar.charClass.savingThrows} />
      <CombatStats character={genChar} />
      <GenericArrayOverview data={genChar.charClass.abilities} />
      <SpellsOverview data={genChar.charClass.spells ?? []} />
      <GenericArrayOverview data={genChar.charClass.equipment.equipment} />
      <ExtraPersonalia character={genChar} />
    </>
  );
};

export default Chargen;
