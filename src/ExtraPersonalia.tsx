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
    </div>
  );
};

export default ExtraPersonalia;
