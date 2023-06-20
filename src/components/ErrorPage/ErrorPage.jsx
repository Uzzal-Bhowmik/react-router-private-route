import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="text-center error-page h-screen flex justify-center items-center">
            <div>
                <h1 className="text-red-600 text-4xl">Oops!</h1>
                <p className='my-4'>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;