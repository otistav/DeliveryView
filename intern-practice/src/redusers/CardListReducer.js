export const setCardList = (state = [], action)=>{
    switch(action.type){
        case 'ADD_ITEM':{
            if(action.item.itemState)
                // for(let i=state.length-1;i>=0;i--){
                //     console.log("this is state[i]s name",state[i].itemName.name);
                //     console.log("this is action",action.item.itemName);
                //
                //     if(state[i].itemName.name===action.item.itemName.name)
                //         state.splice(i,1);}
                state = state.filter(item => {return item.itemName!==action.item.itemName});
            return[
                ...state,
                action.item
            ]
        }break;
        case 'DELETE_ITEM':{
            for(let i=state.length-1;i>=0;i--){
                if(state[i].itemName===action.itemName && state[i].itemQuantity>0){
                    state[i].itemQuantity--
                }
                if(state[i].itemQuantity===0)
                    state.splice(i,1);
            }
            return[
                ...state
            ]
        }break;
        case 'FETCH_FOOD_START':{
            return[
                ...state
            ]
        }
        case 'RECEIVE_FOOD':{
            return[
                ...state,
                action
            ]
        }
        default:return state;break;
    }

};