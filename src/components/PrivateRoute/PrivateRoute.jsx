import React, { useContext } from 'react';
import { AuthContext } from '../../context/ContextUser';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <span className="loading loading-dots loading-lg text-warning"></span>
            </div>
        )
    }

    if (user && user?.uid) {
        return children;
    }
    else {
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;