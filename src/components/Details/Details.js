import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.js';
import * as crudService from '../../services/crudService.js';
import cardImages from '../../img/cardImages.js';



const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [card, setCard] = useState({});
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const { cardId } = useParams();
    const path = `/sounds/${cardId}`;
    // let searchLikesPath = `/likes?where=_ownerId%3D%22${user._id}%22&cardId%3D%22${cardId}%22`

    useEffect(() => {
        crudService.get(path)
            .then(res => {
                setCard(res);
            })
            .catch(err => console.log(err));

        crudService.get(`/likes`)
            .then(res => {
                console.log(res);
                if(res.some(x => x._ownerId === user._id && x.cardId === cardId)){
                    setIsLiked(true);
                }
                setLikes(res.filter(x => x.cardId === cardId).length);
                console.log(likes);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteHandler = () => {
        crudService.remove(user.accessToken, cardId)
            .then(() => {
                navigate('/my-sounds');
            })
    }

 



    const onLikeHandler = () => {

        if (isLiked) {
            return;
        }
        crudService.post(`/likes`, user.accessToken, { cardId: cardId })
            .then(res => console.log(res));
        setLikes(likes => likes + 1);


    }

    const ownerView = (
        <div className="controls-container">
            <ul className="controls">
                <li><Link className="button edit" to={'/edit/' + cardId}>Edit</Link></li>
                <li><button className="button delete" href="#" onClick={deleteHandler}>Delete</button></li>
            </ul>
        </div>
    );

    const userView = (
        <div>
            <button className="like-button" type="button" onClick={onLikeHandler}><i className="fas fa-thumbs-up"></i>Like</button>
            <span>{likes}</span>
        </div>
    )

    return (
        <>
            <div className="details">
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
                    {
                        user._id && (user._id === card._ownerId
                            ? ownerView
                            : userView
                        )
                    }
                </section>
            </div>
        </>
    )
}

export default Details;