import { Routes, Route, Link } from 'react-router-dom';
import SoundList from '../SoundList/SoundList.js';
import './Home.css';

const Home = () => {

    return (
        <div className="cards-container">
            <div className="welcome-page">
                <div className="headings">
                    <h1 className="heading">Welcome to Share Your Sounds</h1>
                    <h3 className="heading">A website for sharing synthesizer sounds</h3>
                </div>
                <div className="parallax"></div>
            </div>
            <Routes>
                <Route path="/" element={<SoundList />} />
            </Routes>
        </div>
    );
}

export default Home;
