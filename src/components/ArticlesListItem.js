import React from 'react'

const ArticlesListItem = ({ title, content }) => (
    <div>
        <h1 className="list-item__title">{title}</h1>
        <p className="list-item__sub-title">{content}</p>
    </div>
);

export default ArticlesListItem