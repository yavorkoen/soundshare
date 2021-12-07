import { Link } from 'react-router-dom';
import './Card.css';
import cardImages from '../../../img/cardImages.js';

const Card = ({ card }) => {
    console.log(cardImages);
    return (
        <li>
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
                <div>
                    <Link className="button" to={"/details/" + card._id} >Details</Link>
                </div>
                <div className="likes">
                    <p><i className="far fa-thumbs-up"></i></p>
                </div>
            </section>
        </li>
    );
}

export default Card;