import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  REQUEST_SEND = 'contact/REQUEST_SEND',
}
// Action Creators
const actionCreator = typescriptFsa();

export const ContactActions = {
  requestSend: actionCreator.async<IFetchRequest, void, void>(ActionType.REQUEST_SEND),
}

// Reducer
export interface IContactState {
  loadState: LoadState;
}

export interface IFetchRequest {
  name: string;
  email: string;
  message: string;
}

const initialState: IContactState = {
  loadState: 'init',
}

const requestSendHandler = (state: IContactState): IContactState => {
  return {...state, loadState: 'loading'};
}

const fetchSuccessHandler = (state: IContactState): IContactState => {
  return { ...state, loadState: 'success'};
}

const fetchFailedHandler = (state: IContactState): IContactState => {
  return {...state, loadState: 'error'};
}

export default reducerWithInitialState(initialState)
  .case(ContactActions.requestSend.started, requestSendHandler)
  .case(ContactActions.requestSend.done, fetchSuccessHandler)
  .case(ContactActions.requestSend.failed, fetchFailedHandler)
  .build();
