// export default (articles) => {
//     return articles;
// };

export default (articles, { text }) => {
    return articles.filter((article) => {
        const textMatch = article.title.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};