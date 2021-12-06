import { useEffect, useState } from 'react';
import * as crudService from '../../services/crudService.js';
import Card from './Cards/Card.js';

const SoundList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let data = crudService.get('/sounds')
        data.then(data => {
            setCards(Object.values(data))
            
        });
    }, []);
    
    console.log(cards);
    return (
        cards.length > 0
        ? (
        <ul>
            {cards.map(card => <Card key={card._id} card={card} />)}
        </ul>
        )
        : <p className="no-sounds">No sounds in database!</p>
    )
}

export default SoundList;