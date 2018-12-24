import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import * as api from 'src/api/contact';
import { IContactRequest } from 'src/api/request';
import { ContactActions } from 'src/modules/contact';



function* send(action: {type: string, payload: IContactRequest}) {
  try {
    yield api.send(action.payload);
    yield put(ContactActions.requestSend.done({
      params: action.payload,
    }));
  } catch (err) {
    yield put(ContactActions.requestSend.failed({
      error: err,
      params: action.payload,
    }));
  }
}

export default function* contactSaga(): SagaIterator {
  yield takeEvery(ContactActions.requestSend.started.type, send);
}
