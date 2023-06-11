import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
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
                    <h1>Enter an email and password to create an account</h1>
                    <form>
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
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Signup
