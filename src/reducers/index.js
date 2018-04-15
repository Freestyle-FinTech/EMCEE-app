import { combineReducers } from 'redux';
// import nav from './nav';
import user from './user';
import portfolio from './portfolios';

const AppReducer = combineReducers({
  // nav,
  user,
  portfolios
});

export default AppReducer;