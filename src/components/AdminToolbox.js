import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ArticleListFilters from './ArticleListFilters';

const AdminToolbox = () => (
    <div>
        <ArticleListFilters />
        <Link to="/create">
            <Button variant="primary" size="lg" active>Create New</Button>
        </Link>
    </div>
);

export default AdminToolbox;