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
        return response;
      },
    },

    reducers: {
      list(state, action) {
        return {data:action.payload};
      },
    },

  };
