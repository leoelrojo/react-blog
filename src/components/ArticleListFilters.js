import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class ArticleListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    
    render() {
        return (
            <input 
                className="text-input"
                placeholder="Search articles"
                value={this.props.filters.text}
                onChange={this.onTextChange}
            />
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListFilters);