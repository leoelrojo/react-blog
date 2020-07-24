import React from 'react';
import { Link } from 'react-router-dom';

const AdminListItem = ({ id, title }) => (
    <Link className="list-item" to={`edit/${id}`}>
        <div>
            <h1 className="list-item__title">{title}</h1>
        </div>
    </Link>
);

export default AdminListItem;