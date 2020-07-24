const filtersReducerDefaultState = {
    text: '',
    tags: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };          
        case 'SET_TAGS_FILTER':
            return {
                ...state,
                tags: action.tags
            };
        default:
            return state;
    }
};