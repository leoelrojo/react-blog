import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AdminCreateNewForm from '../components/AdminCreateNewForm';
import { startAddArticle } from '../actions/articles';

export class AdminCreateNew extends React.Component {
    onSubmit = (article) => {
        console.log(article);
        this.props.startAddArticle(article);
        this.props.history.push('/');
    }

    onBack = () => {
        this.props.history.push('/admin');
    }

    render () {
        return (
            <div>
                <Header />
                <AdminCreateNewForm 
                    onSubmit={this.onSubmit} 
                    ctaText={"Create new"}
                    onBack={this.onBack}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddArticle: (article) => dispatch(startAddArticle(article))
});

export default connect(undefined, mapDispatchToProps)(AdminCreateNew);