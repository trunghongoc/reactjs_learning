// @flow
import request from 'superagent'

export function fetchDataPromiseSagaFunc(payload: any, meta: any) {
  console.log('api 1')
  return request.get('https://jsonplaceholder.typicode.com/users')
    .send({a: 6})
    .then(data => ({data}))
    .catch(error => ({error}));
}