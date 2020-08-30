
export default function (state = [], action) {

  if(action.type==="LOAD_TUTOR_ACTION"){
        return{
            ...state,

                tutor:action.payload
        }
    }else if(action.type==="LOAD_DETAIL_CONTENT"){
        return{
            ...state,
            detailData:action.detailData
        }
    }else if(action.type==="LOAD_TOPIC1"){

        return{
            ...state,
                data:action.topic
        }
    }else if(action.type==="LOGIN"){
      console.log(action.token);
        return{
            ...state,

            token:action.token
        }
    }else{
        return{
            ...state
        }
    }
}
