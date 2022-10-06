import React from 'react';
import LogoComponent from '../../components/LogoComponent';
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
                                                                <ul id="nav" className="nav main-menu menu navbar-nav">
                                                                    <li><a className="leave_site" 
                                                                    // href="javascript:void(0);" 
                                                                    link="https://emiratesnbdbenefits.thriwe.com/booking-history">Booking history</a></li>
                                                                    <li><a className="leave_site" 
                                                                    // href="javascript:void(0);" 
                                                                    link="https://emiratesnbdbenefits.thriwe.com/terms-and-conditions">T&amp;C</a></li>
                                                                    <li><a className="leave_site" 
                                                                    // href="javascript:void(0);" 
                                                                    link="https://emiratesnbdbenefits.thriwe.com/faqs">FAQs</a></li>
                                                                    <li><a className="leave_site" 
                                                                    // href="javascript:void(0);" 
                                                                    link="https://emiratesnbdbenefits.thriwe.com/contact">Contact Us</a></li>
                                                                    <li><a 
                                                                    // href="#!" 
                                                                    className="option"><i className="fa fa-headset text-white" /></a></li>
                                                                    <li className="icon-active"><a 
                                                                    // href="#"
                                                                    >Hi, Manish Sharma</a>
                                                                        <ul className="sub-menu">
                                                                            <li><a className="leave_site" 
                                                                            // href="javascript:void(0);" 
                                                                            link="https://emiratesnbdbenefits.thriwe.com/profile">Manage Profile</a></li>
                                                                            <li><a className="leave_site" 
                                                                            // href="javascript:void(0);" 
                                                                            link="https://emiratesnbdbenefits.thriwe.com/logout">Logout</a></li>
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
    )
}

export default InnerHeader;