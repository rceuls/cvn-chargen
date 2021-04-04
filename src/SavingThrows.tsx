import { ICharacter } from './services/character.generator';

const SavingThrows = ({ character }: { character: ICharacter }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Death Ray or Poison</span>
          <span className="ml-2">{character.charClass.savingThrows[0]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Magical Wands</span>
          <span className="ml-2">{character.charClass.savingThrows[1]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Paralysis or Petrification</span>
          <span className="ml-2">{character.charClass.savingThrows[2]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Dragon Breath</span>
          <span className="ml-2">{character.charClass.savingThrows[3]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Rods, Staves, Spells</span>
          <span className="ml-2">{character.charClass.savingThrows[4]}</span>
        </div>
      </div>

      <hr />
    </>
  );
};

export default SavingThrows;
