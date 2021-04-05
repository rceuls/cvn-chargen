import { getSRDLink, ILinkedItem } from './services/util';

const SpellsOverview = ({ data }: { data: ILinkedItem[] }) => {
  if (data.length) {
    return (
      <>
        {data.map((eq, ix) => (
          <div className="row" key={`id_${ix}`}>
            <div className="col-sm">
              <a href={getSRDLink(eq.link)} target="_blank" rel="noreferrer">
                {eq.label}
              </a>
            </div>
          </div>
        ))}
        <hr />
      </>
    );
  } else {
    return <></>;
  }
};

export default SpellsOverview;
