import { Route, Routes } from "react-router";
import SoundList from "../SoundList/SoundList.js";
import Categories from "./Categories/Categories.js";
import './Catalog.css';


const Catalog = () => {
    
    
    return (
        <Routes>
            <Route path="/" element={<SoundList />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/:category" element={<SoundList />} />
        </Routes>
    )

}

export default Catalog;