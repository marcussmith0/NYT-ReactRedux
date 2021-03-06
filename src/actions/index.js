import  { find, save, findSaved, deleteDestroy }  from '../utils/utils';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_SAVED = 'FETCH_SAVED';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const DELETE_SAVED = 'DELETE_SAVED';

//action creator function that calls help function
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

export function fetchSaved() {

    const request = findSaved();

    return {
        type: FETCH_SAVED,
        payload: request
    }
}

export function deleteSaved(id) {

    deleteDestroy(id);

    return {
        type: DELETE_SAVED,
        payload: id
    }
}