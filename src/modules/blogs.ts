import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import IBlogList from 'src/entities/blogList';
import IBlogPagingList from 'src/entities/blogPagingList';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  REQUEST_LOAD = 'blogs/REQUEST_LOAD',
}

// Action Creators
const actionCreator = typescriptFsa();

export const BlogActions = {
  requestLoad: actionCreator.async<void, IBlogList, void>(ActionType.REQUEST_LOAD),
}

// Reducer
export interface IBlogState {
  loadState: LoadState;
  list?: IBlogPagingList;
}

const initialState: IBlogState = {
  loadState: 'init',
}

const requestLoadHandler = (state: IBlogState): IBlogState => {
  return {...state, loadState: 'loading'};
}

const fetchSuccessHandler = (
  state: IBlogState,
  payload: { params: void, result: IBlogPagingList }
): IBlogState => {
  return {
    ...state,
    list: payload.result,
    loadState: 'success'
  };
}

const fetchFailedHandler = (state: IBlogState): IBlogState => {
  return {...state, loadState: 'error'};
}

export default reducerWithInitialState(initialState)
  .case(BlogActions.requestLoad.started, requestLoadHandler)
  .case(BlogActions.requestLoad.done, fetchSuccessHandler)
  .case(BlogActions.requestLoad.failed, fetchFailedHandler)
  .build();
