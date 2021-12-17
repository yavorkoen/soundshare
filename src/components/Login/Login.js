import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

const Login = () => {

    const navigate = useNavigate();
    const [isError, setIsError] = useState('');
    const { login } = useContext(AuthContext);

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        let data = {
            email,
            password
        }
        authService.login(data)
            .then(res => {
                login(res);
                navigate('/');
            })
            .catch(err => {
                if (err) {
                    setIsError(err.message);
                }
            });
    }

    return (
        <div className="login-container">
            <div className="login-register-bcgr"></div>
            <section className="login">
                <form method="POST" onSubmit={onLoginHandler} >
                    <fieldset>
                        <legend>Login</legend>
                        <div className="field">
                            <div className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className='error-message' style={!isError ? { display: "none" } : null}>{isError}</div>
                        </div>
                        <input type="submit" className="submit" value="Sign In" />
                    </fieldset>
                </form>
                <Link className='register-prompt' to="/register">Create account</Link>
            </section>
        </div>
    );
}

export default Login;