import { Link } from 'react-router-dom';
import cardImages from "../../../../img/cardImages.js"

const CategoryCard = ({ category }) => {
    console.log(category);
    return (
        <div className="category-card">
            <h1>{category}</h1>
            <div className="media">
                <img src={cardImages[category]} alt="logo" />
            </div>
            <Link to={'/catalog/' + category}>Select</Link>
        </div>
    )
}

export default CategoryCard

