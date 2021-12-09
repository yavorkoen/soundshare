import { useContext } from 'react';
import { CategoryContext } from '../../../contexts/CategoryContext.js';
import CategoryCard from './CategoryCard/CategoryCard.js';


const Categories = () => {
    const { categories } = useContext(CategoryContext);

    console.log(categories);

    return (
        // <div className="categories">
            
                <ul className="categories">
                    {categories.map(x => <CategoryCard key={x} category={x}/>)}
                </ul>
            
        // </div>

    )
}

export default Categories;