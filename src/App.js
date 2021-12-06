import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext.js'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import MySounds from './components/MySounds/MySounds.js';
import Details from './components/Details/Details.js';
import Catalog from './components/Catalog/Catalog.js';


function App() {
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([
    'Prophet rev2',
    'Korg microkorg',
    'Arturia'
  ])

  const onChangeCategory = (newCategory) => {
    setCategories(oldCategories => ([...oldCategories, newCategory]))
  }
    
  console.log(categories);

  const login = (authData) => {
    setUser(authData);
  }
  const onLogout = () => {
    setUser({})
  }
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, onLogout, login, categories, onChangeCategory }}>
      <div id="container">
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/my-sounds' element={<MySounds />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:cardId' element={<Details />} />
            <Route path='/catalog/*' element={<Catalog />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
