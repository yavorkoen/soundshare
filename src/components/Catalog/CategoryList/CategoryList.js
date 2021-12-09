import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Card from '../../SoundList/Cards/Card.js'; 
import * as crudService from '../../../services/crudService.js';


const CategoryList = () => {
    const { category } = useParams();
    const [cards, setCards] = useState([]);
    useEffect(() => {
        let data = crudService.get('/sounds')
        data.then(data => {
            setCards(Object.values(data))
            
        })
        .carch(err => console.log(err));
    }, []);
    
    console.log(cards);
    return (
        cards.length > 0
        ? (
        <ul className="sound-list">
            {cards.filter(card => card.category === category).map(card => <Card key={card._id} card={card} />)}
        </ul>
        )
        : <p className="no-sounds">No sounds in database!</p>
    )
}

export default CategoryList;


