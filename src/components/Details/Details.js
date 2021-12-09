import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.js';
import * as crudService from '../../services/crudService.js';
// import useLikes from '../../common/useLikes.js';
// import cardImages from '../../img/cardImages.js';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [card, setCard] = useState({});
    const [likes, setLikes] = useState(0);
    const [likeId, setLikeId] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const { cardId } = useParams();

    const path = `/sounds/${cardId}`;
    let searchLikesByOwner = `/likes?where=_ownerId%3D%22${user._id}%22`;
    let searchLikesByCardId = `/likes?where=cardId%3D%22${cardId}%22`;

    useEffect(() => {
        crudService.get(path)
            .then(res => {
                setCard(res);
            })
            .catch(err => console.log(err));
            return () => setCard({})
    }, [path])

    // const [isLiked, likes, onLikeHandler] = useLikes(cardId, user);
    // console.log(cardId);
    useEffect(() => {
        crudService.get(searchLikesByOwner)
            .then(res => {
                // console.log(res);
                let myLike = res.find(x => x.cardId === cardId)
                console.log(myLike);
                if (myLike !== undefined) {
                    setLikeId(myLike._id);
                    setIsLiked(true);
                } 
                // console.log(likes);
            })
            .catch(err => console.log(err));

            return () => {
                setIsLiked(false);
                console.log(isLiked);
            }
                
    }, [setIsLiked, likes, searchLikesByOwner, cardId]);

    useEffect(() => {
        crudService.get(searchLikesByCardId)
            .then(res => {
                // console.log(res);
                setLikes(res.length);
            }, []);
    })

    const deleteHandler = () => {
        crudService.remove(`/sounds/${cardId}`, user.accessToken)
            .then(() => {
                navigate('/my-sounds');
            })
    }

    const onLikeHandler = () => {
        if (isLiked) {
            crudService.remove(`/likes/${likeId}`, user.accessToken)
                .then(() => {
                    setLikes(likes => likes - 1);
                    setIsLiked(false);
                })
            return;
        }
        crudService.post(`/likes`, user.accessToken, { cardId: cardId })
            .then(res => {
                console.log(res)
                setLikeId(res._id);
                // setIsLiked(true);
                setLikes(likes => likes + 1);
            });
    }

    console.log(isLiked);

    const ownerView = (
        <div className="controls-container">
            <ul className="controls">
                <li><Link className="button edit" to={'/edit/' + cardId}>Edit</Link></li>
                <li><button className="button delete" href="#" onClick={deleteHandler}>Delete</button></li>
            </ul>
        </div>
    );
    // <i className="fas fa-thumbs-down"></i>
    const userView = (
        <div>
            <button className="like-button" type="button" onClick={onLikeHandler}><i className={isLiked ? "fas fa-thumbs-down" : "fas fa-thumbs-up"}></i>{isLiked ? 'Unlike' : 'Like'}</button>
            <span>{likes}</span>
        </div>
    )

    return (
        <>
            <div className="details">
                <section className="card-details">
                    <h4 className="title">{card.title}</h4>
                    <p><span>Author: </span>{card.authorName}</p>
                    <div className="media">
                        {/* <img src={cardImages[card.category]} alt="logo" /> */}
                    </div>
                    <div className="content">
                        <p><span>Category: </span> {card.category}</p>
                        <h3 className="heading">{card.creator}</h3>
                        <p>{card.description}</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/66vSm53-0b8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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