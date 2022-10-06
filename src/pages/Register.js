import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link, useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import { setUserData } from '../services/reducer/actions/Actions';


import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';




function Register(props) {
    const history = useHistory();

    function onPhoneChange() {

    }

    function onPhoneBlur() {

    }

    function onChange(){

    }


    return (
        <>
            <div className="body-overlay" />
            <section className="common-section login-register">
                <div className="container-fluid">
                    <div className="col-md-11 p-0 m-auto">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-xl-6 col-md-5 col-12 text-center order-2">
                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/laptop-img.png" className="img-fluid" />
                                <div className="text">
                                    <h4>We are offering</h4>
                                    <h5 className="text-white">Golf | Airport Transfer | Car Servicing | Car Registration | Local Courier Service</h5>
                                    <h6 className="text-white mt-2 mb-2" style={{ fontSize: '18px' }}>Click on the play button to learn how to navigate the website</h6>
                                    <div className="p-text mb-5" />
                                    <div className="position-relative d-flex flex-row justify-content-center video-play">
                                        <a href="https://emiratesnbdbenefits.thriwe.com/public/web/img/video/enbd-video.mp4?v=633321513b67e" className="video video-popup mfp-iframe">
                                            <i className="fa fa-play" />
                                        </a>
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-xl-6 col-md-7 col-12 order-1">
                                {/* Register Form */}
                                <div className="common-form register-form mt-5">
                                    <div className="form-inner">
                                        <div className="form-title">
                                            <h4>Register</h4>
                                            <p>Don't have an account yet? Sign up Now</p>
                                        </div>
                                        <form
                                        // action="https://emiratesnbdbenefits.thriwe.com/register" className="form" id="register_form" method="post" acceptCharset="utf-8"
                                        >
                                            <input type="hidden" name="csrf_form_name" defaultValue="49d8b6652851aa7b64fe1dfddc6921b4" />
                                            <div className="row">
                                                <div className="col-12 col-lg-6 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-user" /></div>
                                                        <input type="text" id="first_name" maxLength={80} name="first_name" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-user" /></div>
                                                        <input type="text" id="last_name" maxLength={80} name="last_name" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon rg-icon"><i className="fa fa-mobile" /></div>
                                                        <IntlTelInput
                                                            preferredCountries={['tw']}
                                                            onPhoneNumberChange={onPhoneChange()}
                                                            onPhoneNumberBlur={onPhoneBlur()}
                                                            containerClassName="intl-tel-input"
                                                            inputClassName="form-control"
                                                        />
                                                    </div>
                                                </div>



                                                <div className="col-12 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-envelope" /></div>
                                                        <input type="email" id="email"
                                                            // onkeyup="this.value = this.value.toLowerCase();" 
                                                            maxLength={80} name="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-12 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-key" /></div>
                                                        <input type="password" id="password" minLength={8} maxLength={16} className="pasword" name="password" placeholder="Enter Your Password" />
                                                    </div>
                                                    <span className="show-guide" style={{ display: 'none' }}>
                                                        <div className="guide-list ">
                                                            <h3>Password Guidline</h3>
                                                            <ul>
                                                                <li>Should be between 8 to 16 characters </li>
                                                                <li>Should contain atleast 1 Capital letter </li>
                                                                <li>Should contain atleast 1 small letter </li>
                                                                <li>Atleast one special character / symbol </li>
                                                                <li>Atleast one numeric value / number</li>
                                                            </ul>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="col-12 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-key" /></div>
                                                        <input type="password" id="confirm_password" minLength={8} maxLength={16} className="confirm_password" name="confirm_password" placeholder=" Confirm Your Password" />
                                                    </div>
                                                    <span className="show-guide-confirm" style={{ display: 'none' }}>
                                                        <div className="guide-list-confirm">
                                                            <h3>Password Guidline</h3>
                                                            <ul>
                                                                <li>Confirm Password should match with Enter Password </li>
                                                            </ul>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="col-12 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-credit-card" /></div>
                                                        <select id="bin_type" name="bin_type" className="form-select">
                                                            <option disabled>Select Card Type</option>
                                                            <option defaultValue={23} card_type={1} card_network={1} bin_number={420186}>Business Rewards Credit Card</option>
                                                            <option defaultValue={11} card_type={1} card_network={3} bin_number={362800}>Diners Duo Credit Card</option>
                                                            <option defaultValue={4} card_type={1} card_network={2} bin_number={552469}>dnata World Credit Card</option>
                                                            <option defaultValue={34} card_type={1} card_network={1} bin_number={403337}>Etihad Guest Visa Elevate</option>
                                                            <option defaultValue={33} card_type={1} card_network={1} bin_number={403344}>Etihad Guest Visa Inspire</option>
                                                            <option defaultValue={35} card_type={1} card_network={1} bin_number={492237}>Etihad Guest Visa Limitless</option>
                                                            <option defaultValue={32} card_type={1} card_network={2} bin_number={420049}>Invalid  - 420049</option>
                                                            <option defaultValue={15} card_type={1} card_network={2} bin_number={538194}>Liv World Mastercard Credit Card</option>
                                                            <option defaultValue={10} card_type={1} card_network={2} bin_number={532786}>LuLu 247 Platinum Credit Card</option>
                                                            <option defaultValue={27} card_type={1} card_network={2} bin_number={523963}>Manchester United Credit Card</option>
                                                            <option defaultValue={3} card_type={1} card_network={2} bin_number={522873}>Marriott Bonvoy World Credit Card</option>
                                                            <option defaultValue={24} card_type={1} card_network={2} bin_number={521532}>Mastercard Corporate Credit Card</option>
                                                            <option defaultValue={25} card_type={1} card_network={2} bin_number={552191}>Mastercard Platinum</option>
                                                            <option defaultValue={26} card_type={1} card_network={2} bin_number={540978}>Mastercard Titanium</option>
                                                            <option defaultValue={1} card_type={1} card_network={1} bin_number={467745}>Skywards Infinite Credit Card</option>
                                                            <option defaultValue={2} card_type={1} card_network={1} bin_number={467744}>Skywards Signature Credit Card</option>
                                                            <option defaultValue={5} card_type={1} card_network={1} bin_number={403381}>U By Emaar Infinite Credit Card</option>
                                                            <option defaultValue={6} card_type={1} card_network={1} bin_number={403343}>U By Emaar Signature Credit Card</option>
                                                            <option defaultValue={13} card_type={1} card_network={1} bin_number={491652}>Visa Corporate Credit Card</option>
                                                            <option defaultValue={9} card_type={1} card_network={1} bin_number={418887}>Visa Flexi Credit Card</option>
                                                            <option defaultValue={7} card_type={1} card_network={1} bin_number={432114}>Visa Infinite Credit Card</option>
                                                            <option defaultValue={17} card_type={2} card_network={1} bin_number={443913}>VISA Infnite Debit</option>
                                                            <option defaultValue={16} card_type={1} card_network={1} bin_number={458263}>VISA Saudi Infinite Credit Card</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-credit-card" /></div>
                                                        <input type="text" name="card_bin" id="card_bin" minLength={6} maxLength={8} readOnly placeholder="First 6 or 8 digits of your card" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 form-inti">
                                                    <div className="form-group">
                                                        <div className="icon"><i className="fa fa-credit-card" /></div>
                                                        <input type="text" id="last_digit" minLength={4} maxLength={4} name="last_digit" placeholder="Last 4 digits of your card" />
                                                    </div>
                                                </div>
                                                <div className="col-12 form-inti mb-5">
                                                    <div className="form-group  h-100">
                                                        <ReCAPTCHA
                                                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                                            onChange={onChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center mt-2 mb-3">
                                                    <a
                                                        // href="javascript:void(0);" 
                                                        className="order-1 order-sm-0 small pl-2 d-block lh-n not-allowed">OTP will be sent to confirm your email address if the account is associated with this email ID.</a>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12  mb-3 ">
                                                            <a
                                                                // href="javascript:void(0);" 
                                                                className="order-1 order-sm-0  pl-2 d-block small lh-n not-allowed"><span className="icon"><i className="fa fa-info-circle" /></span> You can add more cards from the Add New Card section of the Manage Profile page after creating your account.</a>
                                                        </div>
                                                        <div className="col-12 text-center ">
                                                            <button type="button" id="register_btn" className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1">Register</button>
                                                        </div>
                                                        <div className="col-12 mt-2">
                                                            <label htmlFor="register_form-error" id="register_form_error" className="p-1 w-100 text-center" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="or"><span>OR</span></div>
                                                <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center text-nowrap mb-3 text-danger">
                                                    Have a membership?<a href="https://emiratesnbdbub.thriwe.com/web/registration">&nbsp; <u>Click Here</u> &nbsp;</a> to register via Membership
                                                </div>
                                                <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center text-nowrap">
                                                    Already have an account, &nbsp;<Link to="/" className="btn_login btn-fade"><u>Login</u></Link>
                                                </div>
                                            </div>
                                        </form>          </div>
                                </div>
                                {/*/ End Register Form */}
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="otp_code_modal" tabIndex={-1} role="dialog" data-backdrop="static" aria-labelledby="otp_code_modal_label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <form action="https://emiratesnbdbenefits.thriwe.com/register" className="form" id="otp_form" method="post" acceptCharset="utf-8">
                                <input type="hidden" name="csrf_form_name" defaultValue="49d8b6652851aa7b64fe1dfddc6921b4" />
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Verify your Email Address</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-12 text-center mb-2">
                                                <label className="modal-title text-center">Enter OTP received on your registered email address</label>
                                            </div>
                                            <div className=" col-sm-10 m-auto">
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-1" />
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-2" />
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-3" />
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-4" />
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-5" />
                                                <input type="text" className="otpfield" minLength={1} maxLength={1} id="otc-6" />
                                                <input type="hidden" name="otp_code" id="otp_code" minLength={6} maxLength={6} placeholder="Enter OTP" />
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-10 m-auto">
                                                <a
                                                    // href="javascript:void(0);" 
                                                    className="small pl-2 d-block text-right" id="resend_code_btn"><u>Time Remaining - 01:30</u></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 disable_sw_btn" disabled id="otp_code_btn">Submit</button>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label htmlFor="otp_form-error" id="otp_form_error" className="p-1 w-100 text-center" />
                                    </div>
                                </div>
                            </form>    </div>
                    </div>
                </div>
            </section>
            <div className="cured-ft">
                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/footer-cruved.png" className="img-fluid w-100" />
            </div>
        </>
    );
}

const mapStateToProps = state => ({

});
const mapDistchToProps = dispatch => ({
    setConfigHandler: data => dispatch(setUserData(data))
});
export default connect(mapStateToProps, mapDistchToProps)(Register);