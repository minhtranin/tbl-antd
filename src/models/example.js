import { query } from '../services/benefits'
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield put(query);
      yield put({ type: 'list',payload: response });
      return response;
    },
  },

  reducers: {
    list(state, action) {
      return {...state, ...action.payload};
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
