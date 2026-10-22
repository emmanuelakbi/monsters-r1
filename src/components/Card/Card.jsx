import "./Card.css";

const Card = ({ name, email, id }) => {
  // console.log({ props });
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt={`monster ${name}`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
