import React, {useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import {loginAction} from "../actions";
import CustomizedDialogs from "../utils/CustomizedDialogs";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const [haveAccount,setHaveAccount] = useState(true);
    const [show,setShow] = useState(false);
    const [dialogInfo,setDialogInfo] = useState({
        show:false,
        title:'',
        content:'',
        handleAfterClose:()=>{},
        type:'info'
    })
    const setSingUpStatus=()=> {
        setHaveAccount(false);
    }

    const setSignInStatus=()=> {
        setHaveAccount(true);
    }


    const signin=()=>{
        debugger
    }

    const signup=()=>{


            axios.post("http://localhost:5001/fbweb-31a5f/us-central1/api/user/add", userInfo,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((response) => {
                console.log(response.data);

                setDialogInfo({
                    show:true,
                    title: '회원가입',
                    content: '회원가입 성공 , 로그인 페이지로 이동 합니다.',
                    handleAfterClose:gotoSignin
                })


            }).catch(error => {


                setDialogInfo({
                    show:true,
                    title: '회원가입 실패',
                    content: error.message,
                    handleAfterClose:()=>{},
                    type:'error'
                })


              //  throw(error);
            });


        return;
    }


    const [userInfo, setUserInfo] = useState({
        user_id: '',
        hp: '',
        pwd : '',
        nickname : '',
        sid : '1'
    });

    useEffect(()=>{
        console.log("userInfo",userInfo);
    },[userInfo])


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserInfo({...userInfo,[name]:value});
    }

    const gotoSignin =() => {
        setHaveAccount(true)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {(haveAccount ? 'Sign in'  : 'Sign up')}
                </Typography>
                <form className={classes.form} noValidate>

                    {(!haveAccount &&
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="닉네임"
                            placeholder="최소 3자리 이상"
                            name="nickname"
                            autoComplete="nickname"
                            autoFocus
                            onChange={handleChangeInput}

                        />
                    )}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="email"
                        label="핸드폰번호"
                        placeholder="('-' 없이 숫자만)"
                        name="hp"
                        autoComplete="hp"
                        autoFocus
                        onChange={handleChangeInput}

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="pwd"
                        label="비밀번호"
                        placeholder="숫자 영문자 혼합 4자리 이상"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChangeInput}
                    />

                    {(haveAccount &&
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                    )}

                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={haveAccount ? signin : signup }
                        className={classes.submit}
                    >
                        {haveAccount ? "Sign In" : "Sign Up"
                        }


                    </Button>


                    {   (

                        <CustomizedDialogs open={dialogInfo.show}
                                           title={dialogInfo.title}
                                           content={dialogInfo.content}
                                           handleAfterClose={dialogInfo.handleAfterClose}
                                           type={dialogInfo.type}
                        >
                        </CustomizedDialogs>
                    )}

                    <Grid container>
                        <Grid item xs>
                            {(haveAccount && (
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            ))}
                        </Grid>
                        <Grid item>
                            {(haveAccount &&
                            <Link onClick={setSingUpStatus} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            )}

                            {(!haveAccount &&
                                <Link onClick={setSignInStatus} variant="body2">
                                    {"I have an account. Sign In"}
                                </Link>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}