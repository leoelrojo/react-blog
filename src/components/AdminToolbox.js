import React from 'react';
import { Link } from 'react-router-dom';

const AdminToolbox = () => (
    <div>
        <input value="search"></input>
        <Link className="button" to="/create">Create new</Link>
    </div>
);

export default AdminToolbox;