import { useState, useEffect } from 'react';
import Card from './Card.js';
import * as crudService from '../../service/crudService.js';
import './Home.css';

const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        let data = crudService.getAll()
        data.then(data => {
            setCards(Object.values(data))
        })
    }, []);

    return (
        <div className="cards-container">
            <div className="welcome-page">
                <div className="headings">
                    <h1 className="heading">Welcome to Share Your Sounds</h1>
                    <h3 className="heading">A website for sharing synthesizer sounds</h3>
                </div>
                <div className="parallax"></div>
            </div>
            <ul>
                {cards.map(card => <Card key={card._id} card={card} />)}
            </ul>
        </div>
    );
}

export default Home;
