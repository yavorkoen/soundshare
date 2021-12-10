import { useState, createContext } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        'Prophet rev2',
        'Korg microkorg',
        'Arturia'
    ])

    const onChangeCategory = (newCategory) => {
        setCategories(oldCategories => ([...oldCategories, newCategory]))
    }

    return (
        <CategoryContext.Provider value={{ categories, onChangeCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}