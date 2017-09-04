import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import articles from './reducer_articles';
import saved from './reducer_save';

const rootReducer = combineReducers({
  saved,
  articles,
  form: formReducer
});

export default rootReducer;
