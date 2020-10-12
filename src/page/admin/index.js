import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';
import "moment/locale/ko";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));


export default function AdminPage() {
    const classes = useStyles();
    const listData = useSelector(state => state.order, []) || [];

    return (
        <>
        <div className={classes.root}>
            주문관리



        </div>

            </>
    );
}
