import { FETCH_ARTICLES } from '../actions/index';

export default function (state = {}, action) {

    switch(action.TYPE) {

        case FETCH_ARTICLES:
            return _.mapKeys(action.payload.data, 'id');


        default:
            return state
    }
}