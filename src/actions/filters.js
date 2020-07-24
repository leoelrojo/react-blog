// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_TAGS_FILTER
export const setTagsFilter = (tags = '') => ({
    type: 'SET_TAGS_FILTER',
    tags
});