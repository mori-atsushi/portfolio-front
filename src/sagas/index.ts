import { all } from 'redux-saga/effects';

import blogs from 'src/sagas/blogs';

export default function* rootSaga() {
  yield all([
    blogs(),
  ]);
}
