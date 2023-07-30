import { useRef } from 'react';
import { auth } from '../../firebase';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import './login.scss';

const Login = () => {

    //this is the youtube method:
    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);

    // const register = (e) => {
    //     e.preventDefault();
    // }

    // const signIn = (e) => {
    //     e.preventDefault();
    // }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    const demoLogin = (e) => {
        e.preventDefault();
        signInAnonymously(auth)
            .then(() => {
                navigate("/home")
                // Signed in..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }


    return (
        <div className="login">
            <div className="modal-login">
                <div className="modal__content">
                    <h1>Sign In</h1>
                    <form>
                        <input
                            id="email-address"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required="true"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required="true"
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        <button
                            onClick={onLogin}
                            className="login__btn">
                            Sign In
                        </button>
                        <button
                            onClick={demoLogin}
                            className="demo-log">
                            Demo log-in
                        </button>

                    </form>
                    <h4 className="login__secondary">
                        <span>New to Netflix?</span>
                        <NavLink to="/signup" >
                            <p>Sign up now.</p>
                        </NavLink>


                    </h4>
                </div>

            </div>
        </div>
    )
}

export default Login
