import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxSaga from 'redux-saga';

import sagas from 'src/sagas';
import blogs, { IBlogState } from './blogs';

export interface IState {
  blogs: IBlogState;
}

const sagaMiddleware = reduxSaga();

export const store = createStore(
  combineReducers({
    blogs,
  }),
  applyMiddleware(sagaMiddleware, reduxLogger)
);

sagaMiddleware.run(sagas);
