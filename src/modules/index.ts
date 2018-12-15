import { combineReducers, createStore } from 'redux';

import blogs, { IBlogState } from './blogs';

export interface IState {
  blogs: IBlogState;
}

export const store = createStore(
    combineReducers({
      blogs,
    })
  );
