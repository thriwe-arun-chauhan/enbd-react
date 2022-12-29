import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";

import { setUserData } from "../services/reducer/actions/Actions";

import ForgetPasswordComponent from "../components/ForgetPasswordComponent";
import LoginComponent from "../components/LoginComponent";

function Login(props) {
  const history = useHistory();

  function RegisterPage() {
    history.push("/register");
  }

  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <>
      <div className="body-overlay" />
      <style
        dangerouslySetInnerHTML={{
          __html: "\n.header .right-button{display:none!important;}\n",
        }}
      />
      <section className="common-section pt-0 login-register">
        <div className="container-fluid">
          <div className="col-md-11 p-0 m-auto">
            <div className="row">
              <div className="col-lg-7 col-xl-8 col-md-6 col-12 text-center order-2">
                <div className="row mt-3 steps-boxes pb-5">
                  <div className="col-12 mt-3 mb-3">
                    <h5>How to Claim</h5>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-2">
                    {" "}
                    <div>
                      <p>
                        {" "}
                        <strong className="step-heading">Step 1</strong>
                        <br />
                        <img
                          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/step-1.png"
                          className="img-fluid mb-3"
                          width={50}
                        />{" "}
                        <br />
                        <strong className="step-subheading">
                          {" "}
                          Login / Register
                        </strong>
                      </p>
                      <p>Register on this platform via your email address.</p>
                    </div>{" "}
                  </div>
                  <div className="col-md-6 col-lg-3 mb-2">
                    {" "}
                    <div>
                      <p>
                        {" "}
                        <strong className="step-heading">Step 2</strong>
                        <br />{" "}
                        <img
                          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/step-2.png"
                          className="img-fluid mb-3"
                          width={50}
                        />{" "}
                        <br />
                        <strong className="step-subheading">
                          {" "}
                          Access your benefits
                        </strong>
                      </p>
                      <p>
                        Access complimentary &amp; discounted benefits on your
                        eligible EmiratesNBD cards.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-6 col-lg-3 mb-2">
                    {" "}
                    <div>
                      <p>
                        {" "}
                        <strong className="step-heading">Step 3</strong>
                        <br />
                        <img
                          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/step-3.png"
                          className="img-fluid mb-3"
                          width={50}
                        />{" "}
                        <br />
                        <strong className="step-subheading">
                          {" "}
                          Place your bookings
                        </strong>
                      </p>
                      <p>
                        Start placing bookings from your dashboard for the
                        benefit eligible on your cards.
                      </p>
                    </div>{" "}
                  </div>
                  <div className="col-md-6 col-lg-3 mb-2">
                    {" "}
                    <div>
                      <p>
                        {" "}
                        <strong className="step-heading">Step 4</strong>
                        <br />
                        <img
                          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/step-4.png"
                          className="img-fluid mb-3"
                          width={50}
                        />{" "}
                        <br />{" "}
                        <strong className="step-subheading">
                          {" "}
                          Benefit unlocked
                        </strong>{" "}
                      </p>
                      <p>
                        Once bookings are placed from your account - our team
                        will process it &amp; take it forward.
                      </p>
                    </div>{" "}
                  </div>
                </div>
                <hr />
                {/* <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/laptop-img.png" class="img-fluid"/>*/}
                <div className="text">
                  <h4>We are offering</h4>
                  <h5 className="text-white">
                    Golf | Airport Transfer | Car Servicing | Car Registration |
                    Local Courier Service
                  </h5>
                  <h6
                    className="text-white mt-2 mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    Click on the play button to learn how to navigate the
                    website
                  </h6>
                  <div className="p-text mb-5"></div>
                  <div className="position-relative d-flex flex-row justify-content-center video-play">
                    <a
                      href="https://emiratesnbdbenefits.thriwe.com/public/web/img/video/enbd-video.mp4?v=632beead80f04"
                      className="video video-popup mfp-iframe"
                    >
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
              <div className="col-lg-5 col-xl-4 col-md-6 col-12 mt-3 order-1">
                {showResetPassword ? (
                  <ForgetPasswordComponent
                    setShowResetPassword={setShowResetPassword}
                  />
                ) : (
                  <LoginComponent setShowResetPassword={setShowResetPassword} />
                )}
              </div>
            </div>
          </div>
          {/* Modal Disclaimer*/}
          <div
            className="modal fade"
            id="disclaimer"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="disclaimerLabel"
            data-backdrop="static"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="disclaimerLabel">
                    Disclaimer
                  </h5>
                </div>
                <div className="modal-body">
                  <p>
                    Please read the terms and conditions of use (the
                    “Disclaimer”), provided on the link below, before proceeding
                    with your eligible benefits. By using the linked website,
                    you indicate that you accept the Disclaimer and that you
                    also agree to abide by the Disclaimer. If you do not agree
                    to the Disclaimer, please refrain from using the link.
                  </p>
                </div>
                <div className="modal-footer flex-wrap justify-content-between">
                  <a
                    className="text-decoration-none"
                    data-toggle="collapse"
                    href="#terms-condition"
                    role="button"
                    aria-expanded="false"
                    aria-controls="terms-condition"
                  >
                    Terms &amp; Conditions of using the third party
                  </a>
                  <a
                    className="text-decoration-none custom-btn theme-2"
                    href="https://emiratesnbdbenefits.thriwe.com/dashboard"
                  >
                    Click to proceed
                  </a>
                  <div className="collapse mt-2" id="terms-condition">
                    <div className="card card-body mh-300 overflow-auto">
                      <p>
                        Emiratesnbdbenefits.thriwe.com is a platform/website
                        only for display and booking of various golf offers and
                        other concierge services extended to the customers of
                        EmiratesNBD. EmiratesNBD is not selling/rendering any of
                        these Products/Services. EmiratesNBD does not act as
                        express or implied agent of thriwe.com vis-a-vis the
                        customers. EmiratesNBD is merely facilitating various
                        benefits bookings and payment by its customers by
                        providing the booking engine and Payment Gateway
                        Services to authorize the payment and will not earn any
                        fee by hosting this platform/website. EmiratesNBD is
                        neither guaranteeing nor making any representation with
                        respect to the offers made by Thriwe (the “Service
                        Provider”) and is not responsible for
                        sale/quality/features of the golf offers and airport
                        transfer services.
                      </p>
                      <p>
                        This platform/website may also contain links to
                        third-party web sites which are not directly owned,
                        controlled and or managed by EmiratesNBD. These
                        third-party web sites are independently managed and
                        maintained by such third-party corporations or
                        individuals. EmiratesNBD does not control those linked
                        sites. EmiratesNBD holds no responsibility to any loss
                        and / or damage caused by using any third-party web
                        sites that are linked to our platform/website. Please
                        use the linked web sites by agreeing to the terms
                        provided by the web site. We offer links to such
                        third-party web sites for your convenience only, and we
                        do not expressly recommend the use of these sites, any
                        products and/or services appeared on and/or offered by
                        these web sites.
                      </p>
                      <p>
                        If the customer proceeds from here, any purchase of a
                        golf offers, and airport transfer services will only be
                        through EmiratesNBD’s credit /debit cards. The golf
                        offers and concierge services offered and displayed on
                        Emiratesnbdbenefits.thriwe.com may also be available
                        through direct booking with the respective golf courses.
                        The customer's discretion is advised in this regard.
                      </p>
                      <p>
                        EmiratesNBD assumes no responsibility with respect to
                        the concierge services provided by the Service Provider.
                      </p>
                      <p>
                        The Service Provider and EmiratesNBD are independent
                        contractors to each other and EmiratesNBD will not have
                        any liability at any time towards the card member for
                        any claims, losses that EmiratesNBD’s card member may
                        have against the Service Provider for the services
                        rendered by it to EmiratesNBD’s card member.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Login/Register/Forgot Password */}
      {/* New Membership Modal Start */}
      <div className="modal" id="register-platform">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content" style={{ background: "#fafafa" }}>
            {/* Modal Header */}
            <div className="modal-header pb-0 border-0">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body pb-5 ">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="modal-title">How do you want to register? </h4>
                  <p className="side-padding">
                    You can register via your eligible EmiratesNBD card(s) or
                    you can register via your membership id as sent by Emirates
                    NBD Bank on your email address.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 text-center ">
                  <div className="col-12 mb-4">
                    <h5>Register via card</h5>
                    <p>
                      <small>(For golf and concierge benefits)</small>
                    </p>
                  </div>
                  <div className="col-12 mb-3">
                    <img
                      src="https://emiratesnbdbenefits.thriwe.com/public/web/img/benefit-card-img.png"
                      alt=""
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <div
                      className="custom-btn theme-2 m-1"
                      onClick={() => RegisterPage()}
                      data-dismiss="modal"
                    >
                      Register
                    </div>
                  </div>
                </div>
                <div
                  className="or vertical position-absolute"
                  style={{ top: "50%" }}
                >
                  <span>OR</span>
                </div>
                <div className="col-md-6 text-center">
                  <div className="col-12 mb-4">
                    <h5>Register via membership </h5>
                    <p>
                      <small>(You must have received membership id)</small>
                    </p>
                  </div>
                  <div className="col-12 mb-3">
                    <img
                      src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card1.png"
                      alt=""
                      className="card-imgs thriwe-card"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <button
                      type="button"
                      className="custom-btn theme-2 m-1"
                      // onClick="window.location.href='https://emiratesnbdbub.thriwe.com/web/registration'"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Membership Modal End */}
      <div className="cured-ft">
        <img
          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/footer-cruved.png"
          className="img-fluid w-100"
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});
const mapDistchToProps = (dispatch) => ({
  setConfigHandler: (data) => dispatch(setUserData(data)),
});
export default connect(mapStateToProps, mapDistchToProps)(Login);
