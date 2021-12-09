import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import * as authService from '../../services/authService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
    }, [])

    return null;
};

export default Logout;