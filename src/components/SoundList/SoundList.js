import { useEffect, useState } from 'react';
import * as crudService from '../../services/crudService.js';
import { useParams } from 'react-router-dom';
import Card from './Cards/Card.js';
import './SoundList.css';

const SoundList = () => {
    const { category } = useParams();
    const [cards, setCards] = useState([]);
    useEffect(() => {
        let data = crudService.get('/sounds')
        data.then(data => {
            setCards(Object.values(data))

        });
    }, []);


    console.log(cards);
    return (
        category 
        ? cards.length > 0

        ? (
            <ul className="sound-list">
                {cards.filter(x => x.category === category).map(card => <Card key={card._id} card={card} />)}
            </ul>
        )
        : <p className="no-sounds">No sounds in database!</p>

        : cards.length > 0
            ? (
                <ul className="sound-list">
                    {cards.map(card => <Card key={card._id} card={card} />)}
                </ul>
            )
            : <p className="no-sounds">No sounds in database!</p>
    )
}

export default SoundList;