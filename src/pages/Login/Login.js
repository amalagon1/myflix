import { useRef } from 'react';
import './login.scss';

const Login = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className="login">
            <div className="modal">
                <div className="modal__content">
                    <h1>Sign In</h1>
                    <form>
                        <input type="text" placeholder="Email" required="true"></input>
                        <input type="text" placeholder="Password" required="true"></input>
                        <button type="submit" className="login__btn">
                            Sign In
                        </button>

                    </form>
                    <div className="login__secondary">
                        <p>New to Netflix?</p>
                        <p>Sign up now.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
