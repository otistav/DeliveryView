import { combineReducers } from 'redux';

import itemList from './itemList';
import beer from './beer';
import alcohol from './alcohol';

export default combineReducers({
  itemList,
  beer,
  alcohol,

});
