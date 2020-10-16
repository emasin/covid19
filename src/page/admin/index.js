import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { loadOrderListAction} from "../../actions/index"

import "moment/locale/ko";
import {Button} from "antd";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));


export default function AdminPage() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const listData = useSelector(state => state.orderManage, []) || [];

    const [init ,setInit] = useState(true);
    useEffect(()=>{
        dispatch(loadOrderListAction({}));
    },[dispatch]);


    return (
        <>
        <div className={classes.root}>
            주문관리

            {listData.list && listData.list.map((o, i) => (
                <div>
                    {o.odt}
                </div>
                ))}

        </div>

            </>
    );
}
