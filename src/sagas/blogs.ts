import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import * as api from 'src/api/blogs';
import { BlogArticleActions, IBlogArticleFetchRequest } from 'src/modules/blogArticle';
import { BlogActions, IBlogFetchRequest } from 'src/modules/blogs';
import { PopularBlogsActions } from 'src/modules/popularBlogs';

function* fetchAll(action: {type: string, payload: IBlogFetchRequest}) {
  try {
    const response = yield api.getList(action.payload.page);
    yield put(BlogActions.requestLoad.done({
      params: action.payload,
      result: { ...response }
    }));
  } catch (err) {
    yield put(BlogActions.requestLoad.failed({
      error: void 0,
      params: action.payload,
    }));
  }
}

function* fetchPopular() {
  try {
    const response = yield api.getPopularList();
    yield put(PopularBlogsActions.requestLoad.done({
      result: { ...response }
    }));
  } catch (err) {
    yield put(PopularBlogsActions.requestLoad.failed({
      error: void 0
    }));
  }
}

function* fetchItem(action: {type: string, payload: IBlogArticleFetchRequest}) {
  try {
    const response = yield api.getItem(action.payload.id);
    yield put(BlogArticleActions.requestLoad.done({
      params: action.payload,
      result: { article: response },
    }));
  } catch (err) {
    yield put(BlogArticleActions.requestLoad.failed({
      error: err,
      params: action.payload,
    }));
  }
}

function* sendReadItem(action: {type: string, payload: number}) {
  try {
    yield api.sendRead(action.payload);
    yield put(BlogArticleActions.requestRead.done({
      params: action.payload,
    }));
  } catch (err) {
    yield put(BlogArticleActions.requestRead.failed({
      error: err,
      params: action.payload,
    }));
  }
}

export default function* blogsSaga(): SagaIterator {
  yield takeEvery(BlogActions.requestLoad.started.type, fetchAll);
  yield takeEvery(PopularBlogsActions.requestLoad.started.type, fetchPopular);
  yield takeEvery(BlogArticleActions.requestLoad.started.type, fetchItem);
  yield takeEvery(BlogArticleActions.requestRead.started.type, sendReadItem);
}
