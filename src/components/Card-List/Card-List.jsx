import Card from "../Card/Card";
import "./Card-List.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ name, email, id }, index) => (
        <Card key={`${id}-${index}`} name={name} email={email} id={id} />
      ))}
    </div>
  );
};

export default CardList;
