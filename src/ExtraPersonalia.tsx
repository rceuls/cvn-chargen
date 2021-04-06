import { ICharacter } from './services/character.generator';

const ExtraPersonalia = ({ character }: { character: ICharacter }) => {
  return (
    <div className="row">
      <div className="col-sm">
        <img
          className="img-thumbnail"
          style={{ maxWidth: 200, maxHeight: 200, aspectRatio: 'auto' }}
          src={`${process.env.PUBLIC_URL}/portraits/${character.charClass.image}`}
          alt="your portrait"
        />
      </div>
      <div className="col-sm">
        <div className="row">
          <div className="col-sm">
            Background: {character.traits.background}
          </div>
        </div>
        <div className="row">
          <div className="col-sm">Clothes: {character.traits.clothes}</div>
        </div>
        <div className="row">
          <div className="col-sm">
            Personality: {character.traits.personality}
          </div>
        </div>
        <div className="row">
          <div className="col-sm">Mannerisms: {character.traits.mannerism}</div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPersonalia;
