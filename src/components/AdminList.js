import React from 'react';
import { connect } from 'react-redux';
import selectArticles from '../selectors/articles';
import AdminListItem from '../components/AdminListItem';
import AdminToolbox from './AdminToolbox';

export const AdminList = (props) => (
    <div>
        <AdminToolbox />
        {
            props.articles.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No Articles</span>
                </div>
            ) : (
                props.articles.map((article) => (
                    <AdminListItem key={article.id} {...article} />
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

export default connect(mapStateToProps)(AdminList);