import "./Cards.css";

const Cards = ({ cardImage, cardText, cardIcon }) => {
    return (
        <div className="cardContainer">
            <div className="imageContainer">
                <img src={cardImage} alt="" />
            </div>

            <p>{cardText}</p>
            
            <div className="iconContainer">
                <img src={cardIcon} />
            </div>
        </div>
  );
};

export default Cards;