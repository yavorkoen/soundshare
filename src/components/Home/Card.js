
import './Card.css';

const Card = ({card}) => {
    // console.log(card.imageUrl);
    return (
        <section className="card">
            <div className="media">
                <img src={card.imageUrl} alt="logo" />
            </div>
            <div className="content">
                <h3 className="heading">{card.creator}</h3>
                <p>Short description of what this is all about - crafted to make people interested</p>
                <a className="button" href="">See more</a>
            </div>
        </section>
    );
}

export default Card;