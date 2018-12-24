import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxSaga from 'redux-saga';

import blogArticle, { IBlogArticleState } from 'src/modules/blogArticle';
import blogs, { IBlogState } from 'src/modules/blogs';
import contact, { IContactState } from 'src/modules/contact';
import sagas from 'src/sagas';

export interface IState {
  blogs: IBlogState;
  blogArticle: IBlogArticleState;
  contact: IContactState;
}

const sagaMiddleware = reduxSaga();

export const store = createStore(
  combineReducers<IState>({
    blogArticle,
    blogs,
    contact,
  }),
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(sagas);
