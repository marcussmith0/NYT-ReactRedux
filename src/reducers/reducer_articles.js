import _ from "lodash";

import { FETCH_ARTICLES, SAVE_ARTICLE } from '../actions/index';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_ARTICLES: 
            return _.mapKeys(action.payload, '_id');
        
        case SAVE_ARTICLE:
            return _.omit(state, action.payload);
        
        default:
            return state
    }
}