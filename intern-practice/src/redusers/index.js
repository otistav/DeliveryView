import { combineReducers } from 'redux';

import cardItemList from './cardItemList';
import beer from './beer';
import alcohol from './alcohol';
import menu from './menu';

export default combineReducers({
  cardItemList,
  beer,
  alcohol,
  menu,

});
