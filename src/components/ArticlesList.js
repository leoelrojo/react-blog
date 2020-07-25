import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { Container, Row, Col } from 'react-bootstrap';
import selectArticles from '../selectors/articles';
import ArticlesListItem from './ArticlesListItem';

export const ArticlesList = (props) => {
    const [articlesPerPage, setArticlesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = props.articles.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            props.articles.length === 0 ? (
                                <div className="list-item list-item--message">
                                    <span>No Articles</span>
                                </div>
                            ) : (
                                currentArticles.map((article) => (
                                    <Link key={article.id} className="list-item" to={`article/${article.id}`}>
                                        <ArticlesListItem key={article.id} {...article} />
                                    </Link>
                                ))
                            )
                        }
                    </Col>
                </Row>
            </Container>     
            <Container className="pagination">
                <Row>
                    <Col>
                        <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={articlesPerPage}
                        totalItemsCount={props.articles.length}
                        pageRangeDisplayed={5}
                        onChange={(pageNumber) => {
                            setCurrentPage(pageNumber);
                        }}
                        hideNavigation
                        hideDisabled
                        itemClass="page-item"
                        linkClass="page-link"
                        />     
                    </Col>
                </Row>
            </Container>   
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state.articles, state.filters)
    };
};

export default connect(mapStateToProps)(ArticlesList);