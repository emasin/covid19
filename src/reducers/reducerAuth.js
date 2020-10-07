
export default function (state = [], action) {

    if(action.type==="LOGIN"){
      console.log(action.payload);
        return{
            ...state,

            payload:action.payload
        }
    }else{
        return{
            ...state
        }
    }
}
