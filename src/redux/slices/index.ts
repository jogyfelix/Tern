import { combineReducers } from 'redux';
import userSlice from './userSlice';
import { RESET_APP } from '../../constants/strings';
import fuelLedgerSlice from './fuelLedgerSlice';
import vehiclesSlice from './vehiclesSlice';
import servicesSlice from './servicesSlice';
import fuelCalculatorSlice from './fuelCalculatorSlice';

const reducers = combineReducers({
  user: userSlice,
  fuelLedger: fuelLedgerSlice,
  vehicles: vehiclesSlice,
  services: servicesSlice,
  fuelCalculator: fuelCalculatorSlice,
});

const rootReducer: typeof reducers = (state, action) => {
  if (action.type === RESET_APP) {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
