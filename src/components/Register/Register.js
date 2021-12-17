import { useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import './Register.css';
import { AuthContext } from '../../contexts/AuthContext.js';
import * as authService from '../../services/authService.js';

const Register = () => {
    const { login } = useContext(AuthContext);
    const [isError, setIsError] = useState('');
    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get("email");
        let password = formData.get("password");
        let repass = formData.get("repass");


        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email === '') {
            setIsError('Please enter a valid email address');
            return;
        } else {
            setIsError('');
        }
        if (password.length < 6) {
            setIsError('Password should have at least 6 characters');
            return;
        }else if (password === '' || password !== repass) {
            setIsError('Password doesn\'t match');
            return;
        } else {
            setIsError('');
        }

        let data = {
            email,
            password
        }
        authService.register(data)
            .then(res => {
                console.log(res);
                login(res);
                navigate('/');

            })
            .catch(err => {
                setIsError(err.message)
                console.log(err)
            });

    }

    return (
        <div className="register-container">
            <div className="login-register-bcgr"></div>
            <section className="register">
                <form method="post" onSubmit={onRegisterHandler}>
                    <fieldset>
                        <legend>Register</legend>
                        <div className="field">
                            <div className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />                              
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="repass" id="repass" placeholder="Confirm Password" />
                            </div>
                            <div className="error-message" style={!isError ? { display: 'none' } : null}>{isError}</div>
                        </div>
                        <input type="submit" className="submit" value="Register" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Register;