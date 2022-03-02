import React from 'react';
import notfoundImg from '../../../assests/404 img/download (15).jfif';

const NotFound = () => {
    return (
        <div>
            <img className='404img'  src={notfoundImg} alt="" />
        </div>
    );
};

export default NotFound;