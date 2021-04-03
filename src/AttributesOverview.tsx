import { ICharacter } from './services/character.generator';
import { getModifier } from './services/util';

const AttributesOverview = ({ character }: { character: ICharacter }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">STR</span>
          <span className="ml-2">
            {character.attributes.str} ({getModifier(character.attributes.str)})
          </span>
          <span className="ml-2 font-weight-bold">DEX</span>
          <span className="ml-2">
            {character.attributes.dex} ({getModifier(character.attributes.dex)})
          </span>
          <span className="ml-2 font-weight-bold">CON</span>
          <span className="ml-2">
            {character.attributes.con} ({getModifier(character.attributes.con)})
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">INT</span>
          <span className="ml-2">
            {character.attributes.int} ({getModifier(character.attributes.int)})
          </span>
          <span className="ml-2 font-weight-bold">WIS</span>
          <span className="ml-2">
            {character.attributes.wis} ({getModifier(character.attributes.wis)})
          </span>
          <span className="ml-2 font-weight-bold">CHA</span>
          <span className="ml-2">
            {character.attributes.cha} ({getModifier(character.attributes.cha)})
          </span>
        </div>
      </div>
    </>
  );
};

export default AttributesOverview;
