import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextUser';

const Login = () => {
    const [signInError, setSignInError] = useState("");
    const [signInSuccess, setSignInSuccess] = useState("");


    // import context data
    const { handleSignIn } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        setSignInError("");
        setSignInSuccess("");

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in with email-pass
        handleSignIn(email, password)
            .then(result => {
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
                setSignInSuccess("Signed In Successfully!")
                form.reset();
            })
            .catch(error => {
                setSignInError(error.code)
            })
    }


    return (
        <div className="hero bg-base-200" style={{ height: "600px" }}>
            <div className="hero-content flex-col">

                <div className="text-center my-3" style={{ width: " 800px" }}>
                    <h1 className="text-5xl font-bold text-yellow-500">Login now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <div className='flex mt-3 justify-between items-center'>
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">New User?</Link>
                                </label>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                        </div>

                        {/* display success error msg */}
                        <div>
                            {signInError && (
                                <p className="text-base font-bold text-red-500 my-2">{signInError}</p>
                            )}
                            {signInSuccess && (
                                <p className="text-base font-bold text-green-500 my-2">{signInSuccess}</p>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;