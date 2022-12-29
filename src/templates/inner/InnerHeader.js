import React from "react";
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";

import LogoComponent from "../../components/LogoComponent";
function InnerHeader() {
  return (
    <>
      <header className="header">
        <div className="middle-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="middle-inner">
                  <div className="row">
                    <LogoComponent />
                    <div className="col-lg-10 col-md-9 col-12">
                      <div className="menu-area">
                        <nav className="navbar navbar-expand-lg">
                          <div className="navbar-collapse">
                            <div className="nav-inner">
                              <div className="menu-home-menu-container">
                                <ul
                                  id="nav"
                                  className="nav main-menu menu navbar-nav"
                                >
                                  <li>
                                    <Link
                                      className="leave_site"
                                      // href="javascript:void(0);"
                                      to="/booking-history"
                                    >
                                      Booking history
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="leave_site"
                                      // href="javascript:void(0);"
                                      to="/TermsAndConditions"
                                    >
                                      T&amp;C
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="leave_site"
                                      // href="javascript:void(0);"
                                      to="/faqs"
                                    >
                                      FAQs
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="leave_site"
                                      // href="javascript:void(0);"
                                      to="/Contact"
                                    >
                                      Contact Us
                                    </Link>
                                  </li>
                                  <li>
                                    <a
                                      // href="#!"
                                      className="option"
                                    >
                                      <i className="fa fa-headset text-white" />
                                    </a>
                                  </li>
                                  <li className="icon-active">
                                    <a
                                    // href="#"
                                    >
                                      Hi, Manish Sharma
                                    </a>
                                    <ul className="sub-menu">
                                      <li>
                                        <Link
                                          className="leave_site"
                                          // href="javascript:void(0);"
                                          to="/ManageProfile"
                                        >
                                          Manage Profile
                                        </Link>
                                      </li>
                                      <li>
                                        <a
                                          className="leave_site"
                                          // href="javascript:void(0);"
                                          link="https://emiratesnbdbenefits.thriwe.com/logout"
                                        >
                                          Logout
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default InnerHeader;
