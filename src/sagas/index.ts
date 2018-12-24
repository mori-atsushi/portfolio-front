import { all } from 'redux-saga/effects';

import blogs from 'src/sagas/blogs';
import contact from 'src/sagas/contact';

export default function* rootSaga() {
  yield all([
    blogs(),
    contact(),
  ]);
}
