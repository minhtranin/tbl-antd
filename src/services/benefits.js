import request from '../utils/request';

export function query() {
  return request('http://localhost:8303/');
}
