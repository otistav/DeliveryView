/**
 * Created by sam on 17.07.17.
 */
export default
function beer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BEER_START': {
      return [
        ...state,
      ];
    }
    case 'RECEIVE_BEER': {
      return [
        ...action.payload,
      ];
    }
    default:return state;
  }
}
