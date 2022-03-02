import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfoundImg from '../../../assests/404 img/download (15).jfif';
import './Notfound.css';

const NotFound = () => {
    return (
        <div>
            <img className='notFoundImg'  src={notfoundImg} alt="" />
            <Button>
                <Link to="/home"> Back Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;