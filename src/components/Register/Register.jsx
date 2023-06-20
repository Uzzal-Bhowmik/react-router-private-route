import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextUser';
import googleIcon from "/google.png"

const Register = () => {
    const [signUpError, setSignUpError] = useState("");
    const [signUpSuccess, setSignUpSuccess] = useState("");

    // import context data
    const { handleSignUp, googleSignIn } = useContext(AuthContext);

    // sign up with email and password
    const handleRegister = (e) => {
        e.preventDefault();
        setSignUpError("");
        setSignUpSuccess("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        // sign up with email pass
        handleSignUp(email, password)
            .then(result => {
                const user = result.user;
                setSignUpSuccess("Registration Successful!")
                form.reset();
            })
            .catch(error => {
                setSignUpError(error.code)
            })
    }


    // sign in with google 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
            })
            .catch(error => console.error(error))
    }




    return (
        <div className="hero bg-base-200" style={{ height: "700px" }}>
            <div className="hero-content flex-col">

                <div className="text-center my-3" style={{ width: " 800px" }}>
                    <h1 className="text-5xl font-bold text-yellow-500">Register now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="full name" className="input input-bordered" required />
                        </div>
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

                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>

                        {/* display success error msg */}
                        <div>
                            {signUpError && (
                                <p className="text-base font-bold text-red-500 my-2">{signUpError}</p>
                            )}
                            {signUpSuccess && (
                                <p className="text-base font-bold text-green-500 my-2">{signUpSuccess}</p>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <hr className='w-11/12 mx-auto' />
                    {/* Third party sign in methods */}
                    <div className='w-9/12 mx-auto my-3'>
                        <button className="btn btn-ghost" onClick={handleGoogleSignIn}>
                            <img src={googleIcon} alt="" style={{ width: "30px" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;