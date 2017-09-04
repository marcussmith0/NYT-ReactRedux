import _ from "lodash";

import { FETCH_SAVED } from '../actions/index';

export default function (state = {}, action) {

    switch(action.type) {

        case FETCH_SAVED:
            return _.mapKeys(action.payload, '_id');

        default:
            return state;
    }
}