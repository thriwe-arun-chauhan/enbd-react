import React from "react";

const ForgetPasswordComponent = prop => {
    return (
        <>
            <div className="common-form forgot-password-form mt-5">
                <div className="form-inner">
                    <div className="form-title">
                        <h4>Forgot Password</h4>
                        <p>Recover your password via email address</p>
                    </div>
                    <form action="https://emiratesnbdbenefits.thriwe.com/" className="form" id="forgot_pwd_form" method="post" acceptCharset="utf-8">
                        <input type="hidden" name="csrf_form_name" defaultValue="5ab29ef6a91a5747eb9b81a86330e085" />
                        <div className="row">
                            <div className="col-12 form-inti">
                                <div className="form-group">
                                    <div className="icon"><i className="fa fa-envelope" /></div>
                                    <input type="email" name="forgot_email" id="forgot_email"
                                        // onKeyUp="this.value = this.value.toLowerCase();" 
                                        placeholder="Enter your registered email address" />
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center justify-content-sm-end">
                                <button type="button" id="forgot_pwd_btn" className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 mt-4">Reset Password</button>
                            </div>
                            <div className="col-12 mt-2">
                                <label htmlFor="forgot_pwd_form-error" id="forgot_pwd_error" className="p-1 w-100 text-center" />
                            </div>
                            <div className="or"><span>OR</span></div>
                            <div className="col-12 d-flex flex-row justify-content-center align-items-center align-content-center text-nowrap">Cancel and go back to &nbsp;<a className="btn_login btn-fade" onClick={()=>prop.setShowResetPassword(false)}>Login page</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ForgetPasswordComponent;