import { ICharacter } from './services/character.generator';

const EquipmentOverview = ({ character }: { character: ICharacter }) => {
  return (
    <>
      {character.charClass.equipment.equipment.map((eq) => (
        <div className="row">
          <div className="col-sm">{eq}</div>
        </div>
      ))}
    </>
  );
};

export default EquipmentOverview;
