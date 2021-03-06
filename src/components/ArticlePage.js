import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Chip from '@material-ui/core/Chip';

const ArticlePage = (props) => (
    <div>
        <Header />
        <h1>{props.article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.article.content }}/>
        { props.article.tags.map((tag) => (
            <Chip key={tag} variant='outlined' size='small' label={tag}/>
        ))}
    </div>
);

const mapStateToProps = (state, props) => ({
        article: state.articles.find((article) => article.id === props.match.params.id)
});

export default connect(mapStateToProps)(ArticlePage);