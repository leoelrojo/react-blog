import database from '../firebase/firebase';

// ADD_ARTICLE
export const addArticle = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

export const startAddArticle = (articleData = {}) => {
    return (dispatch, getState) => {
        //const uid = getState().auth.uid;
        const {
            title = '',
            content = '',
            tags = []
        } = articleData;

        const article = { title, content, tags }; 

        return database.ref('articles').push(article).then((ref) => {
            dispatch(addArticle({
                id: ref.key,
                ...article
            }));
        });
    };
};

// EDIT_ARTICLE
export const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
});

export const startEditArticle = (id, updates) => {
    return (dispatch, getState) => {
        //const uid = getState().auth.uid;
        //return database.ref(`users/${uid}/article/${id}`).update(updates).then(() => {
        return database.ref(`articles/${id}`).update(updates).then(() => {    
            dispatch(editArticle(id, updates));
        });
    };
};

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const startRemoveArticle = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //return database.ref(`users/${uid}/article/${id}`).remove().then(() => {
        return database.ref(`articles/${id}`).remove().then(() => {
            dispatch(removeArticle({ id }));
        });
    };
};

// SET_ARTICLES
export const setArticles = (articles) => ({
    type: 'SET_ARTICLES',
    articles
});

export const startSetArticles = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //return database.ref(`users/${uid}/articles`).once('value').then((snapshot) => {
        return database.ref('articles').once('value').then((snapshot) => {
            const articles = [];

            snapshot.forEach((childSnapshot) => {
                articles.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setArticles(articles));
        });
    };
};
