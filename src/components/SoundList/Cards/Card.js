
import './Card.css';
import cardImages from '../../../img/cardImages.js';

const Card = ({ card }) => {
    return (
        <section className="card">
            <h4>{card.title}</h4>
            <p>{card.authorName}</p>
            <div className="media">
                <img src={cardImages[card.category]} alt="logo" />
            </div>
            <div className="content">
                <p>Category: {card.category}</p>
                <h3 className="heading">{card.creator}</h3>
                <p>{card.description}</p>
                <a className="button listen" href="">Listen</a>
            </div>
            <div className="controls-container">
                <ul className="controls">
                    <li><a className="button edit" href="">Edit</a></li>
                    <li><a className="button delete" href="">Delete</a></li>
                </ul>
            </div>
            <div>
                <button className="like-button"><i class="fas fa-thumbs-up"></i></button>
            </div>
        </section>

    );
}

export default Card;