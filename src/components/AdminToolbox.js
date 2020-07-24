import React from 'react';
import { Link } from 'react-router-dom';
import ArticleListFilters from './ArticleListFilters';

const AdminToolbox = () => (
    <div>
        <ArticleListFilters />
        <Link className="button" to="/create">Create new</Link>
    </div>
);

export default AdminToolbox;