import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextUser';

const Header = () => {

    // calling context data
    const { user, authSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        authSignOut()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className="navbar bg-slate-400 text-white font-serif p-0">
            <div className="flex-none">
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-pink-300">ContextAuth</Link>
            </div>
            <div className="flex-1">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className="text-base hover:underline font-bold mx-2">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders" className="text-base hover:underline font-bold mx-2">Orders</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-base hover:underline font-bold mx-2">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-base hover:underline font-bold mx-2">Register</Link>
                    </li>
                </ul>

                {/* show user data imported from context */}
                <div className='ml-auto mr-10'>
                    <span className="text-base hover:text-orange-300 transition-all cursor-pointer font-bold">
                        {user && <span>👋 Hi, {user?.displayName || user?.email}</span>}
                    </span>

                    {
                        user ? <button className='btn btn-sm btn-active btn-primary ml-4' onClick={handleSignOut}>Log Out</button> :
                            <Link to="/login">
                                <button className='btn btn-sm btn-active btn-primary ml-4' >
                                    Log In
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;