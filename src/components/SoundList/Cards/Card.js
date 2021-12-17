import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';
import * as crudService from '../../../services/crudService.js';
import cardImages from '../../../img/cardImages.js';


const Card = ({ card }) => {

    const [likes, setLikes] = useState(0);

    let searchLikesByCardId = `/likes?where=cardId%3D%22${card._id}%22`;

    useEffect(() => {
        crudService.get(searchLikesByCardId)
            .then((res) => {
                setLikes(res.length);
            })
            .catch(err => console.log(err));

    }, [searchLikesByCardId])


    return (
        <li>
            <section className="card">
                <h4 className="title">{card.title}</h4>
                <p><span>Author: </span>{card.authorName}</p>
                <p><span>Category: </span>{card.category}</p>
                <div className="media">
                    <img src={cardImages[card.category]} alt="logo" />
                </div>
                <div className="content">
                    <h3 className="heading">{card.creator}</h3>
                    <p>{card.description}</p>

                </div>
                <div className="actions">
                    <Link className="button" to={"/details/" + card._id}>Details</Link>
                    <div className="likes">
                        <p><i className="far fa-thumbs-up"></i>{likes}</p>
                    </div>
                </div>
            </section>
        </li>
    );
}

export default Card;