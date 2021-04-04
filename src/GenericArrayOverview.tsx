import { chunkArray } from './services/util';

const GenericArrayOverview = ({ data }: { data: string[] }) => {
  if (data) {
    const chonked = chunkArray(
      data.length > 2 ? data : ['', '', ...data],
      2
    ).reverse(); // most items first
    return (
      <>
        {chonked[0].map((eq, ix) => (
          <div className="row">
            <div className="col-sm">{eq}</div>
            {chonked[1].length !== ix ? (
              <div className="col-sm">{chonked[1][ix]}</div>
            ) : (
              <></>
            )}
          </div>
        ))}
        <hr />
      </>
    );
  } else {
    return <></>;
  }
};

export default GenericArrayOverview;
