import './Login.css';

const Login = () => {

    // const loginSubmitHandler = () => {
    //     let formData = new FormData();
    //     const [username, password] = Object.fromEntries(formData);
    //     console.log(username);
    //     console.log(password);
    // }

    return (
        <div className="login-container">
            <div className="login-register-bcgr"></div>
            <section className="login">
                <form method="POST" >
                    <fieldset>
                        <legend>Login</legend>
                        <div className="field">
                            <div className="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                        </div>
                        <input type="submit" className="submit" value="Sign In" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default Login;