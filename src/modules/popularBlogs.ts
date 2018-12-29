import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import IBlog from 'src/entities/blog';
import IBlogList from 'src/entities/blogList';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  REQUEST_LOAD = 'popularBlogs/REQUEST_LOAD',
}

// Action Creators
const actionCreator = typescriptFsa();

export const PopularBlogsActions = {
  requestLoad: actionCreator.async<void, IBlogList, void>(ActionType.REQUEST_LOAD),
}

// Reducer
export interface IPopularBlogsState {
  loadState: LoadState;
  list: IBlog[];
}

const initialState: IPopularBlogsState = {
  list: [],
  loadState: 'init',
}

const requestLoadHandler = (state: IPopularBlogsState): IPopularBlogsState => {
  return {...state, loadState: 'loading'};
}

const fetchSuccessHandler = (
  state: IPopularBlogsState,
  payload: { params: void, result: {list: IBlog[]} }
): IPopularBlogsState => {
  return {
    ...state,
    list: payload.result.list,
    loadState: 'success'
  };
}

const fetchFailedHandler = (state: IPopularBlogsState): IPopularBlogsState => {
  return {...state, loadState: 'error'};
}

export default reducerWithInitialState(initialState)
  .case(PopularBlogsActions.requestLoad.started, requestLoadHandler)
  .case(PopularBlogsActions.requestLoad.done, fetchSuccessHandler)
  .case(PopularBlogsActions.requestLoad.failed, fetchFailedHandler)
  .build();
