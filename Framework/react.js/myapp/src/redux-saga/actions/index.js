import { INCREMENT, INCREMENT_ASYNC } from '../constants';

export const increate = (value) => {
  console.log('action', value)
  return {
    type: INCREMENT,
    value
  }
}

export const increateAsync = () => {
  return {
    type: INCREMENT_ASYNC
  }
}


export const fetch_user = () => {
  return {
    type: 'FETCH_REQUEST'
  }
}