import { combineReducers } from 'redux';

const reducers = combineReducers({});

const rootReducer: typeof reducers = (state, action) => {
  //   if (action.type === sagaActions.RESET_APP) {
  //     state = undefined;
  //   }
  return reducers(state, action);
};

export default rootReducer;
