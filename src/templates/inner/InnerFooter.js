import React from "react";

function InnerFooter() {
  return (
    <>
      <div className="cured-ft">
        <img
          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/footer-cruved.png"
          className="img-fluid w-100"
        />
      </div>
      <footer
        className="footer"
        style={{
          backgroundImage:
            'url("https://emiratesnbdbenefits.thriwe.com/public/web/img/map.png")',
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-widget footer-about widget">
                  <div className="logo">
                    <div className="img-logo">
                      <a
                        className="logo leave_site"
                        // href="javascript:void(0);"
                        link="https://emiratesnbdbenefits.thriwe.com/"
                      >
                        <img
                          className="img-responsive"
                          src="https://emiratesnbdbenefits.thriwe.com/public/web/img/logo2.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="footer-widget-about-description">
                    <p>
                      Exclusive benefits program for EmiratesNBD eligible card
                      holders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-widget f-link widget">
                  <h3 className="widget-title">About</h3>
                  <ul>
                    <li>
                      <a
                        className="leave_site"
                        // href="javascript:void(0);"
                        link="https://emiratesnbdbenefits.thriwe.com/faqs"
                      >
                        FAQ'S
                      </a>
                    </li>
                    <li>
                      <a
                        className="leave_site"
                        // href="javascript:void(0);"
                        link="https://emiratesnbdbenefits.thriwe.com/terms-and-conditions"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="leave_site"
                        // href="javascript:void(0);"
                        link="/PrivacyPolicy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-widget footer_contact widget">
                  <h3 className="widget-title">Contact Customer Support</h3>
                  <ul className="address-widget-list">
                    <li className="footer-mobile-number ">
                      <i className="fa fa-clock-o " />
                      For Golf: 07:30 AM - 05:30 PM GST (Everyday)
                    </li>
                    <li className="footer-mobile-number ">
                      <i className="fa fa-clock-o " />
                      For Other services: Open 24 hours (Everyday)
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa fa-phone" />
                      <a href={`tel:${process.env.REACT_APP_MOBILE}`}>
                        {process.env.REACT_APP_MOBILE}
                      </a>
                    </li>
                    <li className="footer-mobile-number">
                      <i className="fa fa-envelope" />
                      <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                        {process.env.REACT_APP_EMAIL}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright ">
          <div className="container ">
            <div className="row ">
              <div className="col-12 ">
                <div className="copyright-content ">
                  <p>
                    © Copyright{" "}
                    <a
                    // href="javascript:void(0); "
                    >
                      EmiratesNBD
                    </a>
                    . Powered By{" "}
                    <a target="_blank " href="https://thriwe.com/">
                      Thriwe
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default InnerFooter;
