import { useState, useEffect } from 'react';
import * as crudService from '../../services/crudService.js'


const Categories = () => {
    const[categories, setCategories]  = useState({});
    

    useEffect(() => {
   
        let allSounds = crudService.get('/sounds');
        allSounds.then(res => {
            res.forEach( x => {
                setCategories(oldState => ({...oldState, [x.category]:x.category}))
            })

        })
    }, []);
    console.log(categories);
}

export default Categories;