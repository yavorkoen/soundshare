import './Login.css';

const Login = () => {


    return (
        <div className="login-container">
            <div className="login-register-bcgr"></div>
            <section className="login">
                <form method="POST">
                    <fieldset>
                        <legend>Login</legend>
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
                        <input type="submit" className="submit" value="Sign In" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Login;