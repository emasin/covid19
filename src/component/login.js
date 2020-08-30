import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {login} from '../actions/index';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';


import Kakao from 'kakaojs';

import '../static/css/login.css';


function kakaoLogin() {
    Kakao.Auth.loginForm({
        success: (res) => {
            console.log(res);
            Kakao.API.request({
                url: '/v2/user/me',
                success: function (res) {
                    console.log(res);
                }
            });
        },
        fail: (res) => {
            console.log(res);
        }
    });
}

const Login = (props) => {
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({
        password: '',
        email: ''
    });

    const onChange = e => {
        const {name, value} = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
        setLoginInfo({
            ...loginInfo,
            password: event.target.value
        });
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const checkLogin = (e) => {

        dispatch(login(loginInfo));
    };


    return (
        <>
            <div style={{textAlign: 'center', margin: '20px auto', width: '300px'}}>
                <img src="https://www.cambly.com/fe/static/login_illustration_small.png"
                     style={{margin: '20px auto', width: '150px'}}></img>
                <h3 style={{fontSize: '3rem', lineHeight: '1.3', marginBottom: '20px'}}>FEDE 돌아오신걸 환영해요!</h3>
                {/**} <p style={{lineHeight:'1.7', fontSize:'1.4rem'}}>로그인 방법</p> **/}
            </div>
            {/**
             <div style={{margin:'10px auto', textAlign:'center'}}>
             <GoogleLogin style={{ fontSize:'1.25rem', lineHeight:'1.8', textTransform:'none'}}
             clientId="294069593193-et3t9jjuvs8ciitoam8hfmivv8cb34ji.apps.googleusercontent.com"
             onSuccess={(res)=>{
                            console.log(res);
                        }}
             onFailure={(err)=>{
                            console.log(err);
                        }}
             >Google</GoogleLogin>
             <Button onClick={kakaoLogin} variant="outlined" style={{borderColor:'rgb(236 236 236)', marginTop:'-6px', backgroundColor:'#fff', padding:0, marginLeft:'6px', fontSize:'1.4rem', textTransform:'none', boxShadow:'rgb(178 180 182) 0px 1.7px', color:'rgba(0, 0, 0, 0.54)'}}>
             <div style={{padding:'10px', marginRight:'10px'}}>
             <span style={{ width:'21px', height:'21px', display:'block'}}>
             <img src={KakaoIcon} alt="KakaoIcon" style={{width: '100%', marginTop:'-5px'}}></img>
             </span>
             </div>
             <span style={{padding:'10px 10px 10px 0', lineHeight:'1.7'}}>kakao</span>
             </Button>
             </div>
             <div style={{display:'flex', width:'350px', margin:'0 auto'}}><hr style={{width: '40%'}}/><span style={{margin:'0 10px', fontSize:'1.25rem'}}>또는</span><hr style={{width:'40%'}}/></div>**/}
            <div style={{textAlign: 'center', margin: '20px auto', width: '300px', fontSize: '1.4rem'}} key="13132">
                <p style={{lineHeight: '1.7'}}>이메일 주소로 로그인</p>
                <div className="loginform">
                    <TextField id="outlined-full-width" fullWidth margin="normal" InputLabelProps={{shrink: true,}}
                               variant="outlined" style={{fontSize: '1.4rem'}} onChange={onChange} name="email"
                               placeholder={"your email"}/>
                    <div className="login-content" key="1">
                        <FormControl fullWidth variant="outlined" style={{color: '#228891'}} margin="normal" key={22}>
                            <InputLabel htmlFor="component-outlined" title="password"></InputLabel>
                            <OutlinedInput
                                name={"passwd"}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <p style={{textAlign: 'left'}}><a href="#none">비밀번호를 잊으셨나요?</a></p>
                    <Button variant="contained"
                            style={{backgroundColor: '#228891', color: '#fff', fontSize: '12px', margin: '20px 0'}}
                            onClick={() => checkLogin()}>로그인</Button>
                    <p style={{textAlign: 'left'}}>FEDE에 처음이신가요? <span><a href="#none">회원가입</a></span></p>
                </div>
            </div>
        </>
    )

}


export default Login;