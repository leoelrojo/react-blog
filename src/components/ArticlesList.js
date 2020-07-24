import React from 'react';
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
                    <ArticlesListItem key={article.id} {...article} />
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state.articles)
    };
};

export default connect(mapStateToProps)(ArticlesList);