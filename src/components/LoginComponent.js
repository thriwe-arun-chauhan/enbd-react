import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { BrowserRouter as Route, Link, useHistory } from 'react-router-dom';

const LoginComponent = props => {
    const history = useHistory();
    function onChange(){

    }
    
    const Login = () => {
        localStorage.setItem(process.env.REACT_APP_TOKEN_ACCESS_NAME, 'ABC');
        history.push('/home');
    }
    
    return (
        <>
            <div className="common-form login-form pt-3">
                <div className="form-inner">
                    <div className="form-title">
                        <h4>Login <small><a href="https://emiratesnbdbub.thriwe.com/" className="float-right btn_membership" data-toggle="tooltip" data-original-title="Click here to redeem your benefits using membership id.">Login for Membership Users</a></small></h4>
                    </div>
                    <form action="https://emiratesnbdbenefits.thriwe.com/" className="form" method="post" acceptCharset="utf-8">
                        <input type="hidden" name="csrf_form_name" defaultValue="5ab29ef6a91a5747eb9b81a86330e085" />
                        <div className="row">
                            <div className="col-12 form-inti">
                                <div className="form-group">
                                    <div className="icon"><i className="fa fa-envelope" /></div>
                                    <input type="email" name="login_email" id="login_email" maxLength={100}
                                        // onKeyUp="this.value = this.value.toLowerCase();" 
                                        placeholder="Enter your registered email address" />
                                </div>
                            </div>
                            <div className="col-12 form-inti">
                                <div className="form-group">
                                    <div className="icon"><i className="fa fa-lock" /></div>
                                    <input type="password" name="login_password" id="login_password" placeholder="Enter your Password" />
                                </div>
                            </div>
                            <div className="col-12 form-inti">
                                <div className="form-group">
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-column justify-content-between align-items-center align-content-center flex-sm-row mt-3">
                                <a className="btn_forgot_password order-1 order-sm-0" onClick={props.setShowResetPassword}>Forgot your password?</a>
                                <button type="button" id="login_btn" onClick={Login} className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1">Login</button>
                            </div>
                            <div className="col-12 mt-2">
                                <label htmlFor="login_form-error" id="login_form_error" className="p-1 w-100 text-center" />
                            </div>
                            <div className="or"><span>OR</span></div>
                            <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center text-nowrap">
                                Don't have an account yet? &nbsp;<a data-toggle="modal" data-target="#register-platform" className="btn_register btn-fade" style={{ cursor: 'pointer' }}><u>Sign up Now</u></a>
                            </div>
                            <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center text-nowrap text-danger mt-3">
                                Existing concierge customers, &nbsp;<a href="https://emiratesnbdbenefits.thriwe.com/derby-validate" className="btn_register btn-fade"><u>Click Here</u></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default LoginComponent;