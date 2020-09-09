
export default function (state = [], action) {

    if(action.type==="ADD_ORDER_ACTION") {

        return {
            ...state,
            list: action.payload
        }
    }else  if(action.type==="ADD_ITEM_ACTION") {

        return {
            ...state,
            list: action.payload
        }
    }else{
        return{
            ...state
        }
    }
}
