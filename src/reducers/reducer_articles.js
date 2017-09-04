import { FETCH_ARTICLES } from '../actions/index';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_ARTICLES:
            
            return _.mapKeys(action.payload, 'id');


        default:
            return state
    }
}