import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserDocument } from '../../firebase';
import './signup.scss'

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            // createUserDocument(user, email)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }
    return (
        <div className="signup">
            <section>
                <div className="signup__content">
                    <h1 className='heading'>Watch 100+ movie trailers,<br />
                        join now!</h1>
                    <form>
                        <input
                            type="Username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required="true"
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required="true"
                        />
                        <input
                            type="password"
                            placeholder="Add a password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            required="true"
                        />
                        <button
                            type="submit"
                            onClick={onSubmit}
                        >
                            Next
                        </button>
                    </form>
                    <p>
                        Already have an account?{''}
                        <NavLink to="/" >
                            Sign in
                        </NavLink>
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Signup
