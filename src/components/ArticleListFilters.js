import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setTagsFilter } from '../actions/filters';

export class ArticleListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onTagsChange = (e) => {
        this.props.setTagsFilter(e.target.value);
    };
    
    render() {
        return (
            <div>
                <input 
                    className="text-input"
                    placeholder="Search articles"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <input
                    className="text-input"
                    placeholder="Search tags"
                    value={this.props.filters.tags}
                    onChange={this.onTagsChange}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setTagsFilter: (tags) => dispatch(setTagsFilter(tags))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListFilters);