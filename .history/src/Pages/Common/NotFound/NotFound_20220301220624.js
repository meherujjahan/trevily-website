import React from 'react';
import notfoundImg from '../../../assests/404 img/download (15).jfif';
import './Notfound.css';

const NotFound = () => {
    return (
        <div>
            <img className='notFoundImg'  src={notfoundImg} alt="" />
        </div>
    );
};

export default NotFound;