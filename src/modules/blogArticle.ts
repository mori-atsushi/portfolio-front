import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import IBlog from 'src/entities/blog';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  REQUEST_LOAD = 'blogArticle/REQUEST_LOAD',
  REQUEST_READ = 'blogArticle/REQUEST_READ',
}

// Action Creators
const actionCreator = typescriptFsa();

export const BlogArticleActions = {
  requestLoad: actionCreator.async<IFetchRequest, IFetchResult, void>(ActionType.REQUEST_LOAD),
  requestRead: actionCreator.async<number, void, void>(ActionType.REQUEST_READ),
}

// Reducer
export interface IBlogArticleState {
  loadState: LoadState;
  article?: IBlog;
}

export interface IFetchRequest {
  id: number;
}

interface IFetchResult {
  article: IBlog;
}

const initialState: IBlogArticleState = {
  loadState: 'init',
}

const requestLoadHandler = (state: IBlogArticleState): IBlogArticleState => {
  return {...state, loadState: 'loading'};
}

const fetchSuccessHandler = (
  state: IBlogArticleState,
  payload: { result: IFetchResult }
): IBlogArticleState => {
  return {
    ...state,
    article: payload.result.article,
    loadState: 'success'
  };
}

const fetchFailedHandler = (state: IBlogArticleState): IBlogArticleState => {
  return {...state, loadState: 'error'};
}

export default reducerWithInitialState(initialState)
  .case(BlogArticleActions.requestLoad.started, requestLoadHandler)
  .case(BlogArticleActions.requestLoad.done, fetchSuccessHandler)
  .case(BlogArticleActions.requestLoad.failed, fetchFailedHandler)
  .build();
