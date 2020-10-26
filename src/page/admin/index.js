import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'antd/dist/antd.css';
import { loadOrderListAction,orderCompltAction,orderCancelAction} from "../../actions/index"

import "moment/locale/ko";
import {Button, Card} from "antd";
import Typography from "@material-ui/core/Typography";



export default function AdminPage() {
    const dispatch = useDispatch();

    const listData = useSelector(state => state.orderManage, []) || [];

    const [init ,setInit] = useState(true);
    useEffect(()=>{
        dispatch(loadOrderListAction({}));
    },[dispatch]);

    const compl = (oid) => {
        dispatch(orderCompltAction(oid));
        console.log(oid);
    }

    const cancel = (oid) => {
        dispatch(orderCancelAction(oid));
        console.log(oid);
    }

    return (
        <>
            <br/>
            <Card title="주문 목록">
            {listData.list && listData.list.map((o, i) => (
                <>
                <Card type="inner" title={<>주문번호 {o.odt}<br/> 닉네임 {o.userInfo && o.userInfo.username} </>} extra={<><a href="#">준비중</a></>}>
                    <Button  variant="contained"  >주문취소</Button>
                    <Button  variant="contained" color="secondary" onClick={()=>{
                        compl(o.id);
                    }}>준비완료</Button>
                    {o.items.map((item,idx)=>
                        (<>
                            <Typography variant="body2" color="textSecondary" align="left">
                                {item.fname}
                            </Typography>
                        </>))
                    }



                </Card>

                </>
            ))}
            </Card>


            </>
    );
}
