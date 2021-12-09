import { useState, useEffect, useContext } from 'react';
import * as crudService from '../services/crudService.js';
// import { AuthContext } from '../contexts/AuthContext.js';


const useLikes = (cardId, user) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    // const { user } = useContext(AuthContext);
    // console.log(user.accessToken);

    let searchLikesByOwner = `/likes?where=_ownerId%3D%22${user._id}%22`;
    let searchLikesByCardId = `/likes?where=_ownerId%3D%22${cardId}%22`;

    useEffect(() => {
        crudService.get(searchLikesByOwner)
            .then(res => {
                // console.log(res);
                if (res.some(x => x.cardId === cardId)) {
                    setIsLiked(true);
                }
                // setLikes(res.filter(x => x.cardId === cardId).length);
                // console.log(likes);
            })
            .catch(err => console.log(err));


        }, []);

        useEffect(() => {

            crudService.get(searchLikesByCardId)
                .then(res => {
                    console.log(res);
                    setLikes(res.length);
                    // console.log(likes);
                })
                .catch(err => console.log(err));
        }, []);

    console.log(isLiked);
    console.log(likes);

    const onLikeHandler = () => {

        if (isLiked) {
            crudService.remove(user.accessToken, cardId)
            .then(res =>{
                setLikes(likes => likes - 1);
                return;
            })
            .catch(err => console.log(err));
        }
        crudService.post(`/likes`, user.accessToken, { cardId: cardId })
            .then(res => {
                console.log(res)
                setLikes(likes => likes + 1);
            })
            .catch(err => console.log(err));
    }

    return [
        isLiked,
        likes,
        onLikeHandler
    ]

}

export default useLikes;