import { query } from '../services/benefits'
export default {

    namespace: 'benefits',

    state: {},

    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },

    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        const response = yield call(query);
        yield put({ type: 'list', payload: response.data });
        return response.data;
      },
      *storePath({ payload }, { call, put }) {  // eslint-disable-line
        console.log('++++');
        console.log(payload);
        yield put({ type: 'getPath', payload });
      },
    },

    reducers: {
      list(state, action) {
        return {data:action.payload};
      },
      getPath(state, action) {
        return {datas:action.payload};
      },
    },

  };
