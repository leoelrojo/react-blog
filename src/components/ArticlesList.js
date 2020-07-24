import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectArticles from '../selectors/articles';
import ArticlesListItem from './ArticlesListItem';

export const ArticlesList = (props) => (
    <div>
        {
            props.articles.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Articles</span>
                </div>
            ) : (
                props.articles.map((article) => (
                    <Link key={article.id} className="list-item" to={`article/${article.id}`}>
                        <ArticlesListItem key={article.id} {...article} />
                    </Link>
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state.articles, state.filters)
    };
};

export default connect(mapStateToProps)(ArticlesList);