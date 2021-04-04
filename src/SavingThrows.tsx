const SavingThrows = ({ savingThrows }: { savingThrows: number[] }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Death Ray or Poison</span>
          <span className="ml-2">{savingThrows[0]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Magical Wands</span>
          <span className="ml-2">{savingThrows[1]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Paralysis or Petrification</span>
          <span className="ml-2">{savingThrows[2]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Dragon Breath</span>
          <span className="ml-2">{savingThrows[3]}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="font-weight-bold">Rods, Staves, Spells</span>
          <span className="ml-2">{savingThrows[4]}</span>
        </div>
      </div>

      <hr />
    </>
  );
};

export default SavingThrows;
