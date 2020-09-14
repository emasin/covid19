import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
        textDecoration: 'underline'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['메뉴 주문', '메뉴 준비중', '메뉴 준비 완료'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return '주문 취소  가능합니다.   ';
        case 1:
            return '메뉴 준비중으로 취소가 불가합니다.';
        case 2:
            return '메뉴가 모두 준비되었어요.';
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();


    const orderList = useSelector(state => state.order, []) || [];
    const [order,setOrder] = React.useState([]);
    useEffect(()=>{


        const orders = orderList.list && orderList.list.filter((ord)=>{
            if(ord.status !==0)
                return ord;
        });
        if(orders)
            setOrder(orders );

    },[orderList])


    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            {order.map((o, i) => (
                <>
            <Typography className={classes.instructions}>A-79 {o[0].odt}</Typography>
            <Stepper activeStep={o[0].status - 1}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {

                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (

                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>


                    );
                })}
            </Stepper>
            {( o[0].status === 1 && (
                <>
                <Typography className={classes.instructions}>*주문취소 가능   <Button onClick={handleReset} className={classes.button}>
                    취소하기
                </Button></Typography>

                </>
            ))}



            <Box component="span" m={1}>

            </Box>
                </>
                ))}
        </div>
    );
}
