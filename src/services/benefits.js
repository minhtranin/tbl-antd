import request from '../utils/request';

export function query() {
  return request('http://localhost:8304/');
}
export function create(param) {
  return request(`http://localhost:8304/create?name=${param.name}&&old=${param.old}&&phone=${param.phone}&&address=${param.address}`);
}
