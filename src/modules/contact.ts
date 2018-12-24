import typescriptFsa from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

type LoadState = 'init' | 'loading' | 'error' | 'success';

// Actions
enum ActionType {
  CHANGE_REQUEST = 'contact/CHANGE_REQUEST',
  REQUEST_SEND = 'contact/REQUEST_SEND',
}

// Action Creators
const actionCreator = typescriptFsa();

export const ContactActions = {
  changeRequest: actionCreator<IFetchRequest>(ActionType.CHANGE_REQUEST),
  requestSend: actionCreator.async<IFetchRequest, void, void>(ActionType.REQUEST_SEND),
}

// Reducer
export interface IContactState extends IFetchRequest {
  loadState: LoadState;
}

export interface IFetchRequest {
  name: string;
  email: string;
  message: string;
}

const initialState: IContactState = {
  email: '',
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
    loadState: 'success',
    message: '',
    name: '',
  };
}

const fetchFailedHandler = (state: IContactState): IContactState => {
  return {...state, loadState: 'error'};
}

const changeRequestHandler = (
  state: IContactState,
  payload: IFetchRequest,
): IContactState => {
  return {...state, ...payload};
}

export default reducerWithInitialState(initialState)
  .case(ContactActions.requestSend.started, requestSendHandler)
  .case(ContactActions.requestSend.done, fetchSuccessHandler)
  .case(ContactActions.requestSend.failed, fetchFailedHandler)
  .case(ContactActions.changeRequest, changeRequestHandler)
  .build();
