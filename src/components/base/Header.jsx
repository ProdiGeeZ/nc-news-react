import React from 'react';
import { Link } from 'react-router-dom';

function UserHeader() {
    return (
        <h1 className='header-icon'>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                NC NEWS
            </Link>
        </h1>
    );
}

export default UserHeader;
