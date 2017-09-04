import  { find }  from '../utils/utils';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';


export function fetchArticles(values) {
    
    const { topic, startYear, endYear } = values;
    const request = find(topic, startYear, endYear); 

    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}