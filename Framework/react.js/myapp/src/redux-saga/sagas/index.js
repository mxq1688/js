import { all, fork } from 'redux-saga/effects';
import rootUser from './fetchUser';
import { add } from './counter';

export default function* rootSaga() {
  yield all([ // 跟 fork 一样，同时并发多个 action，没有顺序。
    ...rootUser,
    add()
  ])
}
