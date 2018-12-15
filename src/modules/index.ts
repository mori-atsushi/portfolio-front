import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxSaga from 'redux-saga';

import sagas from 'src/sagas';
import blogArticle, { IBlogArticleState } from './blogArticle';
import blogs, { IBlogState } from './blogs';

export interface IState {
  blogs: IBlogState;
  blogArticle: IBlogArticleState;
}

const sagaMiddleware = reduxSaga();

export const store = createStore(
  combineReducers({
    blogArticle,
    blogs,
  }),
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(sagas);
