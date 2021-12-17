import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext.js'
import { CategoryProvider } from './contexts/CategoryContext.js';

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

  return (
    <AuthProvider >
      <CategoryProvider >
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
      </CategoryProvider>
    </AuthProvider>
  );
}

export default App;
