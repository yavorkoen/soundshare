import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { Link } from 'react-router-dom';
import * as crudService from '../../services/crudService.js';
import Card from '../SoundList/Cards/Card.js';

const MySounds = () => {
    const { user } = useContext(AuthContext);
    const [cards, setCards] = useState([]);

    const path = `/sounds?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`

    useEffect(() => {
        let data = crudService.get(path)
        data.then(data => {
            setCards(Object.values(data))
        });
    }, [path]);

    return (
        <section className="my-sounds">
            <div>
                <Link to='/create'>Add New Sound</Link>
            </div>
            {cards.length > 0
                ? (
                    <ul>
                        {cards.map(card => <Card key={card._id} card={card} />)}
                    </ul>
                )
                : <p className="no-sounds">You have no sounds yet</p>
            }
        </section>

    )
}

export default MySounds;