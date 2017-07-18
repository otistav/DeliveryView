/**
 * Created by sam on 17.07.17.
 */
//
// https://www.alacalc.com
export default
function alcohol(state = [], action) {
  switch (action.type) {
    case 'FETCH_ALCOHOL_START': {
      return [
        ...state,
      ];
    }
    case 'RECEIVE_ALCOHOL': {
      return [
        ...action.payload,
      ];
    }
    default:return state;
  }
}
