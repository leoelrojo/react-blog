import React from 'react'

const ArticlesListItem = ({ title, content }) => (
    <div>
        <h1 className="list-item__title">{title}</h1>
        <div className="list-item__sub-title"><div dangerouslySetInnerHTML={{ __html: content.substring(0,200) }}/></div>
    </div>
);

export default ArticlesListItem