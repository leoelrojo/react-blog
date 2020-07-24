import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AdminCreateNewForm from '../components/AdminCreateNewForm';
import { startEditArticle, startRemoveArticle } from '../actions/articles';

export class AdminEdit extends React.Component {
    onSubmit = (article) => {
        this.props.startEditArticle(this.props.article.id, article);
        this.props.history.push('/');
    }

    onRemove = (id) => {
        this.props.startRemoveArticle(id);
        this.props.history.push('/');
    }

    render () {
        return (
            <div>
                <Header />
                <AdminCreateNewForm 
                    article={this.props.article}
                    onSubmit={this.onSubmit} 
                    onRemove={this.onRemove}
                    ctaText={"Edit article"}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    article: state.articles.find((article) => article.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditArticle: (id, article) => dispatch(startEditArticle(id, article)),
    startRemoveArticle: (data) => dispatch(startRemoveArticle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminEdit);