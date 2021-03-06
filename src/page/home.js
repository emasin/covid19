import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Box from "@material-ui/core/Box";


import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';


import 'react-notifications-component/dist/theme.css'
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useDispatch,useSelector} from "react-redux";
import { orderAction,addOrderAction} from "../actions/index"

import moment from 'moment';
import "moment/locale/ko";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    media: {
        height: 110,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '60%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 200,
    },paper: {
        height: 70,
        width: 50,
    },
    mainbutton : {
        margin:10
    },
    title : {
        height : 15,
        margin:0
    }

}));


function createData(category,fname,name, calories, fat, carbs, protein) {
    return { category,fname,name, calories, fat, carbs, protein };
}

const esp_rows = [
    createData('ESP','아메리카노   Americano','Americano', 2.5, 6.0, 24, 4.0),
    createData('ESP','까페라떼     Caffe Latte','CaffeLatte', 3.5, 9.0, 37, 4.3),
    createData('ESP','바닐라라떼   Vanilla Latte','VanillaLatte', 4.0, 16.0, 24, 6.0),
    createData('ESP','까페모카     Caffe Mocha','CaffeMocha', 4.0, 3.7, 67, 4.3),
    createData('ESP','카라멜라떼   Caramel Latte','CaramelLatte', 4.0, 16.0, 49, 3.9),
    createData('ESP','연유라떼     Dolce Latte','DolceLatte', 4.0, 16.0, 49, 3.9),
];


const ncf_rows = [
    createData('NCF','초코라떼     Chocolate Latte','ChocolateLatte', 4.0, 6.0, 24, 4.0),
    createData('NCF','그린티라떼   Greentea Latte','GreenteaLatte', 4.0, 9.0, 37, 4.3),
    createData('NCF','밀크티       Thai Milk Tea','Thai Milk Tea', 4.5, 16.0, 24, 6.0),
    createData('NCF','딸기라떼     Strawberry Latte','Strawberry Latte', 4.5, 3.7, 67, 4.3),

];


const ade_rows = [
    createData('ADE','자몽에이드   Grapefruit Ade','Grapefruit Ade', 4.0, 6.0, 24, 4.0),
    createData('ADE','레몬에이드   Lemonade','Lemon Ade', 4.0, 9.0, 37, 4.3),
    createData('ADE','오미자에이드 Schisandra Ade','오미자에이드 Ade', 4.5, 16.0, 24, 6.0),
    createData('ADE','오미자*레몬  Mixed Ade','오미자*레몬 Ade', 4.5, 3.7, 67, 4.3),

];


const tea_rows = [
    createData('TEA','오설록 녹차  Green Tea','오설록 녹차', 4.0, 6.0, 24, 4.0),
    createData('TEA','오설록 제주영귤 Jeju Tangerine Tea','오설록 제주영귤', 4.0, 9.0, 37, 4.3),
    createData('TEA','오설록 달빛걷기 Korean Pear Tea','오설록 달빛걷기', 4.0, 16.0, 24, 6.0),
    createData('TEA','페퍼민트     Peppermint','Peppermint', 4.0, 3.7, 67, 4.3),
    createData('TEA','카모마일     Chamomile','Chamomile', 4.0, 6.0, 24, 4.0),
    createData('TEA','자몽         Grapefruit Tea','자몽 Tea', 4.5, 9.0, 37, 4.3),
    createData('TEA','레몬         Lemon Tea','레몬 Tea', 4.5, 16.0, 24, 6.0),
    createData('TEA','오미자       Schisandra Tea','오미자', 4.5, 3.7, 67, 4.3),
    createData('TEA','복숭아 아이스티   Iced Peach tea','Iced Peach tea', 2.5, 3.7, 67, 4.3),
    createData('TEA','레몬 아이스티     Iced Lemon tea','Iced Lemon tea', 2.5, 3.7, 67, 4.3),
];


export default function ControlledAccordions() {
    const classes = useStyles();
    const listData = useSelector(state => state.order, []) || [];
    const _user = useSelector(state => state.user, []) || [];
    const [orders, setOrders] = useState([]);
    const [ord, setOrd] = useState({cost:0,items:[],status:0,odt:null,userInfo:{}});
    const [expanded, setExpanded] = React.useState(false);
    const [hasOrder, setHasOrder] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [spacing, setSpacing] = React.useState(2);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("change store order ",listData);
    },[listData]);


    const addOrder=(item)=>{
        setHasOrder(true);

        const list = listData.list ? [...listData.list] : [] ;

        const orderList = list.filter((o,i)=>{

            if( o[0].status === 0 ) {
                o[0].items.push(item);
                o[0].cost = o[0].items.length;
                return o;
            }

        });

        if (orderList.length === 0) {
            const dateToFormat = new Date();

            ord.odt = moment().format('YYYYMMDDhhmmss');

            ord.items.push(item);
            ord.cost =ord.items.length;
            ord.status = 0;
            list.push([{cost:ord.items.length,items : ord.items,status:ord.status,odt:ord.odt}]);
        }

       // const l = list.concat([ord]);

        setOrd(ord);
        dispatch(addOrderAction(list));


    }

    const initOrder = ()=>{
        ord.status=0;
        ord.cost=0;
        ord.items=[];
        setOrd(ord);
        setHasOrder(false);
    }

    const modifyOrder=()=>{
        compltOrder();
    }
    const compltOrder=( )=>{
        if(!_user.info) {
            console.log("alert need auth");
        }

        const list = listData.list ? [...listData.list] : [] ;
        const orderList = list.filter((o,i)=>{
            if( o[0].status === 0 ) {
                o[0].status = 1;
                o[0].userInfo = _user.info;
                return o;
            }

        });

        console.log("orderList",orderList);
        dispatch(orderAction(orderList));
        initOrder();


    }

    const clearOrder=()=>setOrders([])


    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);


    const getCateImage=(category)=>{
        /*
         coffee
                                     noncoffee
                                     tea
                                     ade
                                     coldbrew https://static.thenounproject.com/png/1898526-200.png
                                     juice
         */
        switch (category) {
            case  'ESP' : {
                /**
                 * ESPRESSO
                 */
                return 'https://static.thenounproject.com/png/3413795-200.png';
            }
            case  'NCF' : {
                /**
                 * NON COFFEE
                 */
                return 'https://static.thenounproject.com/png/138917-200.png';

            }
            case  'ADE' : {
                return 'https://static.thenounproject.com/png/429287-200.png';
            }
            case  'TEA' : {
                return 'https://static.thenounproject.com/png/2892478-200.png';
            }
            default : {
                return 'https://static.thenounproject.com/png/3511507-200.png';
            }
        }
    }


    return (
        <>
        <div className={classes.root}>

            <Box component="span" m={1}>

            </Box>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {ord.items.map((o, i) => (
                            <Grid key={i} item>
                                <Card className={classes.root}>
                                    {/**

                                     */}
                                    <CardMedia
                                        className={classes.media}

                                        image={getCateImage(o.category)}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {o.name}
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>

            <Box component="span" m={1}     >

            </Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>ESPRESSO</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {esp_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                              onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                         </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>NON-COFFEE</Typography>
                    <Typography className={classes.secondaryHeading}>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ncf_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                                        onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>ADE</Typography>
                    <Typography className={classes.secondaryHeading}>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ade_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                                        onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>TEA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tea_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                                        onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography className={classes.heading}>계절음료</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ncf_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                                        onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography className={classes.heading}>콜드브루커피(Cold Brew Coffee)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>메뉴명</TableCell>
                                    <TableCell>금액</TableCell>
                                    <TableCell align={"center"}>추가</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ncf_rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" onClick={()=>addOrder(row)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.calories}</TableCell>
                                        <TableCell align={"right"}>
                                            <IconButton aria-label="add" className={classes.margin}
                                                        onClick={()=>addOrder(row)}>
                                                <AddCircleOutlineIcon   />
                                            </IconButton>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>


        </div>
            {( hasOrder &&
            <Box
                bgcolor="background.paper"
                color="text.primary"
                p={1}
                position="fixed"
                right={10}
                bottom={0}
                zIndex="tooltip"
            >
                <Button variant="contained" color="default" className={classes.mainbutton} onClick={modifyOrder}>주문변경</Button>
                <Button variant="contained" color="secondary" className={classes.mainbutton} onClick={compltOrder}>주문하기</Button>
            </Box>
            )}
            </>
    );
}
