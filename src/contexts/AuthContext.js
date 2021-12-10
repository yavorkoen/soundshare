import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('key', {});


    const login = (authData) => {
        setUser(authData);
      }
      const logout = () => {
        setUser({})
      }

    return (
        <AuthContext.Provider value={{ user, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
}