import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2> Page NotFound: 404❌</h2>
            <h3>Please click: <Link to='/'>Home</Link></h3>
        </div>
    );
};

export default NotFound;