export default (articles, { text, tags }) => {
    return articles.filter((article) => {
        const textMatch = article.title.toLowerCase().includes(text.toLowerCase());
        //const tagsMatch = article.tags.toLowerCase().includes(tags.toLowerCase());
        let tagsMatch = false;
        for(let i = 0; i<article.tags.length; i++) {
            if(article.tags[i].toLowerCase().includes(tags.toLowerCase())) {
                tagsMatch = true;
                break;
            }
        }

        return tagsMatch && textMatch;
    });
};