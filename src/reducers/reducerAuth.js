
export default function (state = [], action) {

    if(action.type==="LOGIN"){
        debugger
      console.log(action.payload);
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
