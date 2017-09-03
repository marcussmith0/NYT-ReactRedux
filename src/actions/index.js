
export const FETCH_ARTICLES = 'FETCH_ARTICLES';

export function fetchArticles(values) {
    console.log(values);


    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}