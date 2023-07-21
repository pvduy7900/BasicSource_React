import { all, fork } from 'redux-saga/effects';
import getCollectionOrderSaga from '../../components/layout/saga';

export default function* rootSaga() {
  yield all([
    fork(getCollectionOrderSaga),
    // define module saga here
  ]);
}
