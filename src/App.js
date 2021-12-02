import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext.js'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';


function App() {
  const [user, setUser] = useState({});

  useEffect(() => {

  })

  const onLogin = (authData) => {
    setUser(authData);
  }
  const onLogout = () => {
    setUser({})
  }
  console.log(user);
  return (
    <AuthContext.Provider value={{user, onLogout, onLogin}}>
      <main id="site-content">
        <Header user={user}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
