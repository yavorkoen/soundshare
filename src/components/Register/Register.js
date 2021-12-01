import { useState } from 'react';
import './Register.css';
import * as authService from '../../services/authService.js';

const Register = () => {

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isMatchPassword, setIsMatchPassword] = useState(true);


    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get("email");
        let password = formData.get("password");
        let repass = formData.get("repass");


        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email === '') {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }
        if (password === '') {
            setIsValidPassword(false);
        } else {
            setIsValidPassword(true);
        }
        if (password !== repass) {
            setIsMatchPassword(false);
        } else {
            setIsMatchPassword(true);

        }
        let info = {
            email,
            password
        }
        authService.register(info)
            .then(res => {
                console.log(res)
                let userData = localStorage.setItem('user', JSON.stringify(res));
                let user = JSON.parse(userData)
                console.log(user);
            })
            .catch(err => {
                console.log(err)
            });

    }


    return (
        <div className="register-container">
            <div className="login-register-bcgr"></div>
            <section className="register">
                <form method="post" onSubmit={registerSubmitHandler}>
                    <fieldset>
                        <legend>Register</legend>
                        <div className="field">
                            <div className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
                                <div className={isValidEmail ? "valid-email" : "invalid-email"}>Please enter a valid email address</div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <div className={isValidPassword ? "valid-password" : "invalid-password"}>Please enter a password</div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="repass" id="repass" placeholder="Confirm Password" />
                                <div className={isMatchPassword ? "valid-password" : "invalid-password"}>Password doesn't match</div>
                            </div>
                        </div>
                        <input type="submit" className="submit" value="Register" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Register;