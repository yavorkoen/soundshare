import './Register.css'

const Register = () => {

    return (
        <div className="register-container">
            <div className="login-register-bcgr"></div>
            <section className="register">
                <form action="#" method="post">
                    <fieldset>
                        <legend>Register</legend>
                        <p className="field">
                            <div className="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                            </div>
                        </p>
                        <p className="field">
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                        </p>
                        <p className="field">
                            <div className="input">
                                <input type="password" name="repass" id="repass" placeholder="Confirm Password" />
                            </div>
                        </p>
                        <input type="submit" className="submit" value="Register" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Register;