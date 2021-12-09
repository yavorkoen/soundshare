import { Link } from 'react-router-dom';
import cardImages from "../../../../img/cardImages.js";
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    console.log(category);
    return (
        <li>
            <div className="category-card">
                <h1 className="category-title">{category}</h1>
                <div className="media">
                    <img width="300" src={cardImages[category]} alt="logo" />
                </div>
                <Link className="button" to={'/catalog/' + category}>Select</Link>
            </div>
        </li>
    )
}

export default CategoryCard

