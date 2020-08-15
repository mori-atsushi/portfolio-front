import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxSaga from 'redux-saga';

import blogArticle, { IBlogArticleState } from 'src/modules/blogArticle';
import blogs, { IBlogState } from 'src/modules/blogs';
import contact, { IContactState } from 'src/modules/contact';
import popularBlogs, { IPopularBlogsState } from 'src/modules/popularBlogs';
import sagas from 'src/sagas';

export interface IState {
  blogs: IBlogState;
  blogArticle: IBlogArticleState;
  contact: IContactState;
  popularBlogs: IPopularBlogsState;
}

const sagaMiddleware = reduxSaga();
const middlewares: [Middleware] = [sagaMiddleware];
if (process.env.NODE_ENV !== `production`) {
  middlewares.push(reduxLogger);
}

export const store = createStore(
  combineReducers<IState>({
    blogArticle,
    blogs,
    contact,
    popularBlogs,
  }),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);
