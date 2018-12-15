import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import * as api from 'src/api/blogs';
import { BlogActions } from 'src/modules/blogs';

function* fetchAll() {
  try {
    const response = yield api.getList();
    yield put(BlogActions.requestLoad.done({
      result: { list: response }
    }));
  } catch (err) {
    yield put(BlogActions.requestLoad.failed({ error: void 0 }));
  }
}

export default function* blogsSaga(): SagaIterator {
  yield takeEvery(BlogActions.requestLoad.started.type, fetchAll);
}
