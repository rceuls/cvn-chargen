import { ICharacter } from './services/character.generator';
import { names } from './services/names';
import { getRndValue, getSRDLink } from './services/util';

const Personalia = ({ character }: { character: ICharacter }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          You are {getRndValue(names)} the{' '}
          <a
            href={getSRDLink(character.charClass.url)}
            target="_blank"
            rel="noreferrer"
          >
            {character.charClass.name}
          </a>
        </div>
      </div>
      {character.charClass.suffix ? (
        <div className="row">
          <div className="col-sm">{character.charClass.suffix}</div>
        </div>
      ) : (
        <></>
      )}
      <hr />
    </>
  );
};

export default Personalia;
