import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { articles } from './articles_reducer';

const rootReducer = combineReducers({
  articles: articles,
  form: formReducer
});

export default rootReducer;
