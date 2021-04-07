import React from 'react';
import { getExtraAttributes } from './services/character.attributes';
import { CharacterAttributes } from './services/character.classes';
import { formatBonus, getModifier } from './services/util';

const attributeOrder: CharacterAttributes[] = [
  CharacterAttributes.STR,
  CharacterAttributes.DEX,
  CharacterAttributes.CON,
  CharacterAttributes.INT,
  CharacterAttributes.WIS,
  CharacterAttributes.CHA,
];

const AttributesOverview = ({
  attributes,
  calculateBonusXP,
}: {
  attributes: number[];
  calculateBonusXP: (input: number[]) => string;
}) => {
  const extraInfo = getExtraAttributes(attributes);
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          {attributeOrder.map((a: CharacterAttributes, ix: number) => {
            return (
              <React.Fragment key={`ca${ix}`}>
                <span className="font-weight-bold">
                  {CharacterAttributes[a]}
                </span>
                <span className="ml-2 mr-2">
                  {attributes[+a]} ({formatBonus(getModifier(attributes[+a]))})
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <span className="font-weight-bold">Bonus XP</span>
          <span className="ml-2">{calculateBonusXP(attributes)}</span>
        </div>
        <div className="col-sm-2">
          <span className="font-weight-bold">Open doors</span>
          <span className="ml-2">{extraInfo.openDoors}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <span className="font-weight-bold">Literacy</span>
          <span className="ml-2">{extraInfo.literacy}</span>
        </div>
        <div className="col-sm-10">
          <span className="font-weight-bold">Languages</span>
          <span className="ml-2">{extraInfo.spokenLanguages}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <span className="font-weight-bold">Max Retainers</span>
          <span className="ml-2">{extraInfo.maxRetainers}</span>
        </div>
        <div className="col-sm-2">
          <span className="font-weight-bold">Retainer Loyality</span>
          <span className="ml-2">{extraInfo.retainerLoyality}</span>
        </div>
        <div className="col-sm-8">
          <span className="font-weight-bold">NPC reactions</span>
          <span className="ml-2">{extraInfo.npcReaction}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <span className="font-weight-bold">Magic Save</span>
          <span className="ml-2">
            {formatBonus(getModifier(attributes[+CharacterAttributes.WIS]))}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AttributesOverview;
