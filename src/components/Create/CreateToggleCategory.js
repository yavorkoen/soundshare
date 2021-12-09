import { useContext, useState } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext.js';


const CreateToggleCategory = () => {

    const [newCategory, setNewCategory] = useState(false);
    let { categories } = useContext(CategoryContext);
    
    
    const categoryToggleHandler = (e) => {
        e.preventDefault();
        if (!newCategory) {
            setNewCategory(true);
        } else {
            setNewCategory(false);
        }
    }
    
    const existingCategoryView = (
        <div className="categories">
            <div className="field">
                <label htmlFor="category">Select category</label>
                <div className="input">
                    <select id="category" name="category">
                        {categories.map(x => <option key={x} value={x}>{x}</option>)}
                    </select>
                </div>
                <button type="text"  id="category-toggle" onClick={categoryToggleHandler}>Create new category</button>
            </div>
        </div>
    )
    
    const newCategoryView = (
        <div className="categories">
            <div className="field">
                <div className="field">
                    <label htmlFor="newCategory">Name your category</label>
                    <div className="input">
                        <input type="text" name="category" id="category" placeholder="Category name" />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="categoryImage">Attach category image</label>
                    <div className="input">
                        <input type="text" name="categoryImage" id="categoryImage" placeholder="URL" />
                    </div>
                </div>
                <button type="text"  id="category-toggle" onClick={categoryToggleHandler}>Select existing category</button>
            </div>
        </div>
    )

    return (newCategory
    ? newCategoryView
    : existingCategoryView
    )
}

export default CreateToggleCategory;