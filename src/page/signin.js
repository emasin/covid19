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
    const setSingUpStatus=()=> {
        setHaveAccount(false);
    }

    const setSignInStatus=()=> {
        setHaveAccount(true);
    }
    useEffect(()=>{},[])

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

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호"
                        placeholder="숫자 영문자 혼합 4자리 이상"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    {(haveAccount &&
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
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