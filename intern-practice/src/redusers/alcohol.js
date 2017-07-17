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
            // action.payload.data = action.payload.data.map(item =>{return {name:item.name, description:item.tagline,
            //     img:item.image_url, state: false}});
            // let i = -1;let mass = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
      return [
        ...action.payload,
      ];
    }
    default:return state;
  }
}
