import { ICharacterClass } from './services/character.classes';
import { getSRDLink } from './services/util';

const Personalia = ({
  character,
}: {
  character: {
    charClass: { url: string; name: string; suffix?: string };
    name: string;
  };
}) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          You are {character.name} the{' '}
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
