import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext.js'
import { CategoryContext } from './contexts/CategoryContext.js';

import useLocalStorage from './hooks/useLocalStorage.js'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import Create from './components/Create/Create.js';
import MySounds from './components/MySounds/MySounds.js';
import Details from './components/Details/Details.js';
import Catalog from './components/Catalog/Catalog.js';
import Edit from './components/Edit/Edit.js';


function App() {
  const [user, setUser] = useLocalStorage('key', {})
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
  const logout = () => {
    setUser({})
  }
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      <CategoryContext.Provider value={{categories, onChangeCategory }}>
      <div id="container">
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path='/my-sounds' element={<MySounds />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:cardId' element={<Details />} />
            <Route path='/catalog/*' element={<Catalog />} />
            <Route path='/edit/:cardId' element={<Edit />} />
          </Routes>
        </main>
      </div>
      </CategoryContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
