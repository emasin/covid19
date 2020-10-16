
export default function (state = [], action) {

    if(action.type==="LOGIN"){

        return{
            ...state,

            info:action.payload.info
        }
    }else{
        return{
            ...state
        }
    }
}
