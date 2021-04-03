import { ICharacter } from './services/character.generator';

const CharacterAbilities = ({ character }: { character: ICharacter }) => {
  return (
    <>
      {character.charClass.abilities.map((ab) => (
        <div className="row">
          <div className="col-sm">{ab}</div>
        </div>
      ))}
    </>
  );
};

export default CharacterAbilities;
