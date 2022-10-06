import React from 'react'
import { connect } from 'react-redux';

import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'


function OuterFooter(props) {
    return (
        <>
            <footer className="footer" style={{ backgroundImage: 'url("https://emiratesnbdbenefits.thriwe.com/public/web/img/map.png")' }}>
                <div className="footer-top">
                    <div className="container">
                        <div className="col-md-10 m-auto">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-12 ">
                                    <div className="single-widget footer-about widget">
                                        <div className="logo">
                                            <div className="img-logo">
                                                <a className="logo" href="https://emiratesnbdbenefits.thriwe.com/">
                                                    <img className="img-responsive" src="https://emiratesnbdbenefits.thriwe.com/public/web/img/logo2.png" alt="logo" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="footer-widget-about-description">
                                            <p>Exclusive benefits program for EmiratesNBD eligible card holders. Register / Login to get started today.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="single-widget footer_contact widget">
                                        <h3 className="widget-title">Contact Customer Support</h3>
                                        <ul className="address-widget-list">
                                            <li className="footer-mobile-number "><i className="fa fa-clock-o " />For Golf: 07:30 AM - 05:30 PM GST (Everyday)</li>
                                            <li className="footer-mobile-number "><i className="fa fa-clock-o " />For Other services: Open 24 hours (Everyday)</li>
                                            <li className="footer-mobile-number"><i className="fa fa-phone" /><a href="tel:800035703553">8000 3570 3553</a></li>
                                            <li className="footer-mobile-number"><i className="fa fa-envelope" /><a href="mailto:customer.care@thriwe.com">customer.care@thriwe.com</a></li>
                                        </ul>
                                    </div>
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
                                    <p>© Copyright <a
                                    // href="javascript:void(0); "
                                    >EmiratesNBD</a>. Powered By <a target="_blank " href="https://thriwe.com/">Thriwe</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <div id="WAButton" /> */}
            <FloatingWhatsApp />
        </>
    )
}

const mapStateToProps = state => ({
    data: state.cardItems
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(OuterFooter)