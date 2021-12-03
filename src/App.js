import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext.js'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import MySounds from './components/MySounds/MySounds.js';


function App() {
  const [user, setUser] = useState({});

  useEffect(() => {

  })

  const login = (authData) => {
    setUser(authData);
  }
  const onLogout = () => {
    setUser({})
  }
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, onLogout, login }}>
      <div id="container">
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/my-sounds' element={<MySounds />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
