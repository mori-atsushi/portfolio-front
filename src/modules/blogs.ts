import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  REQUEST_LOAD = 'blogs/REQUEST_LOAD',
  FETCH_SUCCESS = 'blogs/FETCH_SUCCESS',
  FETCH_FAILURE = 'blogs/FETCH_FAILURE',
}

// Action Creators
const actionCreator = typescriptFsa();

export const BlogActions = {
  fetchFailure: actionCreator(ActionType.FETCH_FAILURE),
  fetchSuccess: actionCreator(ActionType.FETCH_SUCCESS),
  requestLoad: actionCreator(ActionType.REQUEST_LOAD),
}

// Reducer
export interface IBlogState {
  loadState: LoadState;
}

const initialState: IBlogState = {
  loadState: 'init'
}

const requestLoadHandler = (state: IBlogState): IBlogState => {
  return {...state, loadState: 'loading'};
}

export default reducerWithInitialState(initialState)
  .case(BlogActions.requestLoad, requestLoadHandler)
  .build();
