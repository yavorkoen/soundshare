import { Route, Routes } from "react-router";
import SoundList from "../SoundList/SoundList.js";


const Catalog = () => {
    let category = 'category'
    
    return (
        <Routes>
            <Route path="/" element={<SoundList />} />
            <Route path={"/" + category} element={<SoundList />} />
        </Routes>
    )

}

export default Catalog;