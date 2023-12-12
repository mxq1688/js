import { INCREMENT_ASYNC, INCREMENT } from '../constants';
// import {delay} from 'redux-saga';
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects';


const delay = ms=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve({name: 'mxq'})
  },ms)})


function* increase() {
  const re = yield call(delay, 1000); // 需要执行异步的时候，直接调用 call
  yield put({ type: INCREMENT, payload: re }); //发送对应的 dispatch，触发对应的 action; 相当于redux的dispatch，区别在于参数直接到reducer
}

// 直接 export 函数，没有做整理
export function* add() {
  //takeEvery 监听对应的 action；每一次 dispatch 都会触发；例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，每一次点击，都是有效的。
  yield takeEvery(INCREMENT_ASYNC, increase);
  //takeLatest 监听对应的 action； 只会触发最后一次 dispatch；例如：点击一个新增的按钮，2s 后触发新增动作，在2s内不断点击按钮，这时候，只有最后一次点击是有效的。
  // yield takeLatest(INCREMENT_ASYNC, increase);
}
