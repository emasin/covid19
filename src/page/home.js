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


import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
    }

}));


function createData(fname,name, calories, fat, carbs, protein) {
    return { fname,name, calories, fat, carbs, protein };
}

const rows = [
    createData('아메리카노   Americano','Americano', 2.5, 6.0, 24, 4.0),
    createData('까페라떼     Caffe Latte','CaffeLatte', 3.5, 9.0, 37, 4.3),
    createData('바닐라라떼   Vanilla Latte','VanillaLatte', 4.0, 16.0, 24, 6.0),
    createData('까페모카     Caffe Mocha','CaffeMocha', 4.0, 3.7, 67, 4.3),
    createData('카라멜라떼   Caramel Latte','CaramelLatte', 4.0, 16.0, 49, 3.9),
    createData('연유라떼     Dolce Latte','DolceLatte', 4.0, 16.0, 49, 3.9),
];




export default function ControlledAccordions() {
    const classes = useStyles();

    const [orders, setOrders] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [hasOrder, setHasOrder] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [spacing, setSpacing] = React.useState(2);

    const order=(item)=>{


        addOrder(item);
    }

    const addOrder=(item)=>{
        setHasOrder(true);
        setOrders([...orders,item]);
        console.log("add",orders);
    }

    const clearOrder=()=>setOrders([])

    useEffect(() => {
        console.log("orders.length",orders.length);
        if(orders.length < 1)
            setHasOrder(false);
       /** store.addNotification({
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });**/
    }, [orders]);

    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    return (
        <>
            <div className={classes.root}>

                <Box component="span" m={1}>

                </Box>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                            {orders.map((o, i) => (
                                <Grid key={i} item>
                                    <Paper className={classes.paper} title={o.name}  > {o.name}
                                        <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />
                                    </Paper>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                </Grid>

                <Box component="span" m={1}>

                </Box>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>ESPRESSO</Typography>
                        <Typography className={classes.secondaryHeading}>메뉴명 선택 시 즉시 주문</Typography>
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
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row" onClick={() => order(row)}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell>{row.calories}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton aria-label="add" className={classes.margin}
                                                            onClick={() => addOrder(row)}>
                                                    <AddCircleOutlineIcon/>
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
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>NON-COFFEE</Typography>
                        <Typography className={classes.secondaryHeading}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                            diam eros in elit. Pellentesque convallis laoreet laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>ADE</Typography>
                        <Typography className={classes.secondaryHeading}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>TEA</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography className={classes.heading}>계절음료</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <Typography className={classes.heading}>콜드브루커피(Cold Brew Coffee)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


            </div>
            {(hasOrder &&
                <Box
                    bgcolor="background.paper"
                    color="text.primary"
                    p={1}
                    position="fixed"
                    right={10}
                    bottom={0}
                    zIndex="tooltip"
                >
                    <Button variant="contained" color="default" className={classes.mainbutton}
                            onClick={clearOrder}>주문변경</Button>
                    <Button variant="contained" color="secondary" className={classes.mainbutton}>주문하기</Button>
                </Box>
            )}
        </>
    );
}
