import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { IContactRequest } from 'src/api/request';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  CHANGE_REQUEST = 'contact/CHANGE_REQUEST',
  REQUEST_SEND = 'contact/REQUEST_SEND',
}

// Action Creators
const actionCreator = typescriptFsa();

export const ContactActions = {
  changeRequest: actionCreator<IContactRequest>(ActionType.CHANGE_REQUEST),
  requestSend: actionCreator.async<IContactRequest, void, { message: string }>(ActionType.REQUEST_SEND),
}

// Reducer
export interface IContactState extends IContactRequest {
  loadState: LoadState;
  errorMessage: string;
}

const initialState: IContactState = {
  email: '',
  errorMessage: '',
  loadState: 'init',
  message: '',
  name: '',
}

const requestSendHandler = (state: IContactState): IContactState => {
  return {...state, loadState: 'loading'};
}

const fetchSuccessHandler = (state: IContactState): IContactState => {
  return {
    ...state,
    email: '',
    errorMessage: '',
    loadState: 'success',
    message: '',
    name: '',
  };
}

const fetchFailedHandler = (
  state: IContactState,
  payload: { error: { message: string } }
): IContactState => {
  return {
    ...state,
    errorMessage: payload.error.message,
    loadState: 'error',
  };
}

const changeRequestHandler = (
  state: IContactState,
  payload: IContactRequest,
): IContactState => {
  return {...state, ...payload};
}

export default reducerWithInitialState(initialState)
  .case(ContactActions.requestSend.started, requestSendHandler)
  .case(ContactActions.requestSend.done, fetchSuccessHandler)
  .case(ContactActions.requestSend.failed, fetchFailedHandler)
  .case(ContactActions.changeRequest, changeRequestHandler)
  .build();
