import axios from "axios";


export  function orderAction(list){

    return(dispatch)=>{
        return dispatch(fetchOrderAction(list));
        /**return axios.get("https://app.devkids.co.kr/data/tutor.json").then((response)=>{
            dispatch(fetchOrderAction(response.data));
        })**/
    }
}

export function fetchOrderAction(data){
    return{
        type:"ADD_ORDER_ACTION",
        payload:data
    }
}

export  function addItemAction(list){

    return(dispatch)=>{
        return dispatch(fetchOrderAction(list));
        /**return axios.get("https://app.devkids.co.kr/data/tutor.json").then((response)=>{
            dispatch(fetchOrderAction(response.data));
        })**/
    }
}






export  function loadContent(){
    return(dispatch)=>{
        return axios.get("https://app.devkids.co.kr/data/data.json").then((response)=>{
            dispatch(changeContent(response.data));
        })
    }
}


export function changeContent(data){
    return{
        type:"CHANGE_CONTENT",
        data:data
    }
}



export  function loadContentDetail(key){
    return(dispatch)=>{
        return axios.get("https://app.devkids.co.kr/data/data.json").then((response)=>{
            console.log(response.data[key]);
            dispatch(changeContentDetail(response.data[key]));
        })
    }
}


export function changeContentDetail(data){
    console.log(data);
    return{
        type:"LOAD_DETAIL_CONTENT",
        detailData:data
    }
}




export  function loadTopic1(){
    return(dispatch)=>{
        //local
        return axios.get("https://us-central1-fbweb-31a5f.cloudfunctions.net/api/topics").then((response)=>{
            dispatch(loadTopic1Action(response.data));
        })
    }
}


export function loadTopic1Action(data){
    return{
        type:"LOAD_TOPIC1",
        topic:data
    }
}



export  function login(payload){
    return(dispatch)=>{
        //usr-9cfe92cd
        //return dispatch(loginAction(true));
        console.log(payload);
        return axios.post("https://us-central1-fbweb-31a5f.cloudfunctions.net/api/login",payload).then((response)=>{
            console.log(response.data);
            dispatch(loginAction(response.data.token));
        }).catch(error => {
            console.log(error.message);
            throw(error);
        });

    }
}


export function loginAction(data){
    return{
        type:"LOGIN",
        isLogin:data
    }
}