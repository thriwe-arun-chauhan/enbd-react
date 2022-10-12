import React from 'react';

function Contact() {
    return (
        <>

            <div
                className="breadcrumbs overlay"
                style={{
                    backgroundImage:
                        'url("https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                {/* Bread Menu */}
                                <div className="bread-menu">
                                    <ul>
                                        <li>
                                            <a href="https://latesttestemiratesnbdbenefits.thriwe.com/">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://latesttestemiratesnbdbenefits.thriwe.com/contact">
                                                Contact Customer Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Bread Title */}
                                <div className="bread-title">
                                    <h2>Contact Customer Support</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="contact-us section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12 m-auto">
                            <div className="contact-box-main m-top-30">
                                <div className="contact-title">
                                    <h2>Contact with us</h2>
                                    <p>
                                        You can reach our customer care support in case of any issues or
                                        any query related to your benefits. We will be happy to assist
                                        you.
                                    </p>
                                </div>
                                {/* Single Contact */}
                                <div className="single-contact-box">
                                    <div className="c-icon">
                                        <i className="fa fa-clock-o" />
                                    </div>
                                    <div className="c-text">
                                        <h4>Opening Hour</h4>
                                        <p>For Golf: 07:30 AM - 05:30 PM GST (Everyday)</p>
                                        <p>For Other services: Open 24 hours (Everyday)</p>
                                    </div>
                                </div>
                                {/*/ End Single Contact */}
                                {/* Single Contact */}
                                <div className="single-contact-box">
                                    <div className="c-icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="c-text">
                                        <h4>Call Us Now</h4>
                                        <p>
                                            Tel.:
                                            <a href="tel:800035703553">8000 3570 3553</a>
                                            {/* <br> Mob.: <a href="tel:7656543451">765 654 3451</a></p> */}
                                        </p>
                                    </div>
                                </div>
                                {/*/ End Single Contact */}
                                {/* Single Contact */}
                                <div className="single-contact-box">
                                    <div className="c-icon">
                                        <i className="fa fa-envelope-o" />
                                    </div>
                                    <div className="c-text">
                                        <h4>Email Us</h4>
                                        <p>
                                            <a href="mailto:customer.care@thriwe.com">
                                                customer.care@thriwe.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/*/ End Single Contact */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}


export default Contact;
