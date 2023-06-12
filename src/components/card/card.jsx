import "./card.css";

const Card = ({ data }) => {
  if (data)
    return (
      <>
        {data?.map((item) => (
          <div key={item.postcode} className="grid-container">
            <div className="title">Postcode</div>
            <div className="semicolon">{item.postcode}</div>
            <div className="title">Region</div>
            <div className="semicolon">{item.region}</div>
            <div className="title">Country</div>
            <div className="semicolon">{item.country}</div>
          </div>
        ))}
      </>
    );

  return null;
};

export default Card;
