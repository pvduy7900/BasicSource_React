import { put, take, fork, call, takeEvery } from 'redux-saga/effects';
import uiActions from 'services/UI/actions';

function* fetchUser(action: any): any {
  console.log('action', action);
  yield put(uiActions.setLoadingPage(false));
  // yield 2;
}

function* testHhahahaahha(): any {
  // while true = take every
  // const {
  //     payload: { ...params },
  //   } =
  yield takeEvery('test_alll', fetchUser);
  //   yield put(getListStart());
}

export default function* root() {
  yield fork(testHhahahaahha);
}
