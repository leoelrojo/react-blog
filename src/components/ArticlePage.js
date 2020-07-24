import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Chip from '@material-ui/core/chip';

const ArticlePage = (props) => (
    <div>
        <Header />
        <h1>{props.article.title}</h1>
        <div>{ props.article.content }</div>
        { props.article.tags.map((tag) => (
            <Chip key={tag} variant='outlined' size='small' label={tag}/>
        ))}
    </div>
);

const mapStateToProps = (state, props) => ({
        article: state.articles.find((article) => article.id === props.match.params.id)
});

export default connect(mapStateToProps)(ArticlePage);