import  { find, save }  from '../utils/utils';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';


export function fetchArticles(values) {
    
    const { topic, startYear, endYear } = values;
    const request = find(topic, startYear, endYear); 

    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}

export function saveArticle(article) {

    save(article);

    return {
        type: SAVE_ARTICLE,
        payload: article._id
    }

}