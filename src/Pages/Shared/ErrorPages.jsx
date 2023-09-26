import React from 'react';
import { useRouteError } from 'react-router-dom';
import errImg from '../../assets/Frame.png';

const ErrorPages = () => {
    const error = useRouteError();
    return (
        <div className='flex items-center justify-center mt-16'>
            <img src={errImg} alt="" />
        </div>
    );
};

export default ErrorPages;