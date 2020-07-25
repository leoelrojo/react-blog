import React from 'react'

const ArticlesListItem = ({ title, content }) => (
    <div>
        <h1 className="list-item__title">{title}</h1>
        <p className="list-item__sub-title"><span dangerouslySetInnerHTML={{ __html: content.substring(0,200) }}/></p>
    </div>
);

export default ArticlesListItem